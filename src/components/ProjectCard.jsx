import { TbWindowMaximize } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ title, description, image, tech, live, github }) => {
    return (
        <div className="project-border flex flex-col w-full md:max-w-[450px] lg:h-[700px] xl:max-w-[550px] items-center justify-start p-5">
            <div className="relative overflow-hidden ">
                {/* img */}
                <img
                    className="flex lg:min-h-[320px] hover:scale-125 transition-all duration-500 rounded-md"
                    src={image}
                    alt={`Screenshot of ${title} project`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <p className="flex text-3xl text-gradient my-5 text-center">{title}</p>
                <p className="flex w-[85%] text-center">{description}</p>
                <p className="text-gradient flex flex-wrap items-center justify-center w-full mt-5 font-bold text-center">
                    {tech.map((item) => {
                        return (
                            <span key={item} className="px-3 flex">
                                {item}
                            </span>
                        );
                    })}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 mx-3 mt-7 mb-5 w-[85%] text-lg">
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
                            href={live}
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
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
