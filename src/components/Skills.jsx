import { skills } from "../data/skills";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
    return (
        <section
            className="flex flex-col items-center justify-center w-full max-w-[900px] min-h-screen pt-0 md:pt-0"
            id="skills"
        >
            <h2 className="text-center w-full mb-5 md:mb-12 font-bold text-2xl lg:text-3xl text-gradient">Skills</h2>
            <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-7 lg:gap-9 mt-10"
            >
                {skills.map((skill) => {
                    return (
                        <div key={skill.label} className="flex flex-col items-center justify-center">
                            <img src={skill.icon} alt={`${skill.label} logo`} className="h-[50px] md:h-[68px]" />
                            <p className="mt-1 font-bold text-sm lg:text-xl">{skill.label}</p>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Skills;
