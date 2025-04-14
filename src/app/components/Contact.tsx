import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-20 px-4 md:px-16 backdrop-blur-md text-white"
    >
      <h2 className="text-3xl font-bold mb-8">Contacto</h2>
      <p className="mb-8 text-gray-300">
        ¿Querés que trabajemos juntos? No dudes en escribirme o encontrarme en
        redes.
      </p>

      <form
        action="https://formsubmit.co/fede.bdev@gmail.com"
        method="POST"
        className="grid gap-6 max-w-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
          className="p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Tu mensaje"
          required
          className="p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded transition transform hover:scale-105"
        >
          Enviar
        </button>
      </form>

      <div className="mt-10 flex gap-6">
        <div className="flex gap-4 items-center">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin icon"
            className="object-contain"
            width={40}
            height={40}
          />
          <a
            href="https://www.linkedin.com/in/federico-barreirob"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src="/icons/github.svg"
            alt="github icon"
            className="object-contain"
            width={40}
            height={40}
          />
          <a
            href="https://github.com/FedeBarreirob"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
