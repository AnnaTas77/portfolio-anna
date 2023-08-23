import { skills } from "../data/skills";

const Skills = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full max-w-[900px] min-h-screen " id="skills">
            <h2 className="text-center w-full text-xl mb-12 font-bold md:text-2xl lg:text-3xl text-gradient">Skills</h2>
            <div className="flex flex-wrap items-center justify-center gap-7 mt-10">
                {skills.map((skill) => {
                    return (
                        <div key={skill.label} className="flex flex-col items-center justify-center">
                            <img src={skill.icon} alt={`${skill.label} logo`} className="h-[55px]" />
                            <p className="mt-1 font-bold">{skill.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
