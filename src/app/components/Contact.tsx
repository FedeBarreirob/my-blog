import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Contact() {
  const t = useTranslations("");
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-20 px-4 md:px-16 backdrop-blur-md text-white"
    >
      <h2 className="text-3xl font-bold mb-8">{t("CONTACT")}</h2>
      <p className="mb-8 text-gray-300">{t("WORK_TOGETHER")}</p>

      <form
        action="https://formsubmit.co/fede.bdev@gmail.com"
        method="POST"
        className="grid gap-6 max-w-xl"
      >
        <input
          type="text"
          name="name"
          placeholder={t("YOUR_NAME")}
          required
          className="p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder={t("YOUR_EMAIL")}
          required
          className="p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white"
        />
        <textarea
          name="message"
          rows={5}
          placeholder={t("YOUR_MESSAGE")}
          required
          className="p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white"
        />
        <button
          type="submit"
          className="cursor-pointer mt-6 items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-xl font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
        >
          {t("SEND")}
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
