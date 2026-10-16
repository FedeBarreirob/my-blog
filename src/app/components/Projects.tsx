import Image from "next/image";
import { useTranslations } from "next-intl";
import { getProjects } from "../utils/projects";

export default function Projects() {
  const t = useTranslations("");
  const projects = getProjects(t);
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 px-6 py-24"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
        {t("PROJECTS_I_WORKED")}
      </h2>
      <ol className="mt-12 border-l border-line">
        {projects.map((project) => (
          <li
            key={project.title}
            className="reveal relative pb-14 pl-8 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.title}
              className="inline-block"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={160}
                height={40}
                className={`${project.title === "Syndeno" ? "h-12" : "h-8"} w-auto rounded-sm object-contain`}
              />
            </a>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              {project.rol} · {project.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
