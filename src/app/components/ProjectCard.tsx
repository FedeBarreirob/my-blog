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
        className={`w-full md:w-[50%] h-full shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-md 
    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* Imagen */}
        <div className="w-full md:w-[30%] flex items-center justify-center">
          <Image
            src={project.image}
            alt="project image"
            className="rounded-full object-cover shadow-md"
            width={180}
            height={180}
            priority
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-[70%] flex flex-col justify-center space-y-3 text-gray-100 text-center md:text-left">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="italic text-indigo-300">{project.rol}</p>
          <p className="text-sm leading-relaxed max-w-prose mx-auto md:mx-0">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto md:mx-0 mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-sm hover:scale-105 motion-reduce:transform-none"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
