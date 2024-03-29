import { TbWindowMaximize } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ProjectCard = ({ title, description, image, tech, live, github }) => {
    return (
        <div className="project-border flex flex-col w-full md:max-w-[450px] lg:h-[800px] xl:max-w-[550px] items-center justify-start p-5">
            <div className="relative overflow-hidden ">
                {/* IMAGE */}
                <img
                    className="flex hover:scale-125 transition-all duration-500 rounded-md"
                    src={image}
                    alt={`Screenshot of ${title} project`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <p className="flex text-2xl md:text-3xl text-gradient my-5 text-center">{title}</p>
                <motion.p
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="flex w-[85%] text-center text-md md:text-lg "
                >
                    {description}
                </motion.p>
                <motion.p
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="text-gradient flex flex-wrap items-center justify-center w-full mt-5 font-bold text-center"
                >
                    {tech.map((item) => {
                        return (
                            <span key={item} className="px-3 flex text-lg md:text-xl">
                                {item}
                            </span>
                        );
                    })}
                </motion.p>
                <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-6 mx-3 mt-7 mb-5 w-[85%] text-md md:text-lg"
                >
                    <a
                        href={live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center font-bold cursor-pointer"
                    >
                        <span>
                            <TbWindowMaximize />
                        </span>
                        <span className="pulsate">Live</span>
                    </a>
                    {typeof github === "string" ? (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center font-bold cursor-pointer"
                        >
                            <span>
                                <BsGithub />
                            </span>
                            <span className="pulsate">Code</span>
                        </a>
                    ) : (
                        github.map((link) => {
                            return (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center font-bold cursor-pointer"
                                >
                                    <span>
                                        <BsGithub />
                                    </span>
                                    <span className="pulsate">{link.label}</span>
                                </a>
                            );
                        })
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectCard;
