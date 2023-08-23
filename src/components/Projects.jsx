import ProjectCard from "./ProjectCard";

import { projects } from "../data/data.js";

const Projects = () => {
    return (
        <section
            className="flex flex-col w-full items-center justify-center min-h-screen pt-20 mb-[100px]"
            id="projects"
        >
            <h2 className="text-center w-full text-xl py-5 mb-10 mt-[30px] font-bold md:text-2xl lg:text-3xl bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]">
                Portfolio Projects
            </h2>

            <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full gap-8">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                            live={project.live}
                            github={project.github}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
