import Avatar from "./components/Avatar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Avatar />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hola, soy Federico
              </h1>
              <p className="text-lg md:text-xl mt-4 text-gray-600">
                Desarrollador Fullstack experimentado en creación de
                aplicaciones web..
              </p>
            </div>
          </div>

          <div className="w-full text-center space-x-4">
            <a
              href="#projects"
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 motion-reduce:transform-none"
            >
              Ver Proyectos
            </a>
            <a
              href="#stack"
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 motion-reduce:transform-none"
            >
              Ver Stack
            </a>
          </div>
        </main>
      </div>
      <Projects />
      <Stack />
    </>
  );
}
