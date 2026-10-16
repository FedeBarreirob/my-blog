import { useTranslations } from "next-intl";
import Avatar from "./Avatar";

export default function Hero() {
  const t = useTranslations("");
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100svh-3.25rem)] max-w-5xl flex-col justify-center px-6 py-16"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Avatar />
        <div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {t("HI_IM_FEDERICO")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t("DESCRIPTION_TEXT")}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
        >
          {t("SEE_PROJECTS")}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          {t("CONTACT")}
        </a>
      </div>
    </section>
  );
}
