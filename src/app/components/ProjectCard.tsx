import { Project } from "@/app/types/project";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className={`w-full flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`w-full md:w-[50%] h-full shadow-lg rounded-2xl p-8 flex gap-8 bg-white/10 backdrop-blur-md 
        ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
      >
        <div className="w-[30%] flex items-center justify-center">
          <Image
            src={project.image}
            alt="project image"
            className="rounded-full object-cover shadow-md"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="w-[70%] flex flex-col justify-center space-y-3 text-gray-100">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="italic text-indigo-300">{project.rol}</p>
          <p className="text-sm leading-relaxed max-w-prose">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[fit-content] inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-sm hover:scale-105 motion-reduce:transform-none"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
