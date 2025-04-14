import { projects } from "@/app/utils/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen space-y-8 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-2xl md:text-6xl font-bold">Proyectos</h2>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))
            }
        </section>
    )
}