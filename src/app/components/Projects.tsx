import { getProjects } from "../utils/projects";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("");
  const projects = getProjects(t);
  return (
    <section
      id="projects"
      className="min-h-screen space-y-8 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <h2 className="text-3xl font-bold">{t('PROJECTS_I_WORKED')}</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
}
