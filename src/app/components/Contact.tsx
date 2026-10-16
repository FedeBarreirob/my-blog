import Image from "next/image";
import { useTranslations } from "next-intl";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface p-3 text-sm font-normal";

const socials = [
  {
    label: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/federico-barreirob",
  },
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/FedeBarreirob",
  },
];

export default function Contact() {
  const t = useTranslations("");
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-16 px-6 py-24"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
        {t("CONTACT")}
      </h2>
      <p className="mt-8 max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
        {t("WORK_TOGETHER")}
      </p>

      <form
        action="https://formsubmit.co/fede.bdev@gmail.com"
        method="POST"
        className="mt-12 grid max-w-xl gap-4"
      >
        <input type="hidden" name="_captcha" value="true" />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <label className="grid gap-1 text-sm font-medium">
          {t("YOUR_NAME")}
          <input type="text" name="name" required className={fieldClass} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          {t("YOUR_EMAIL")}
          <input type="email" name="email" required className={fieldClass} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          {t("YOUR_MESSAGE")}
          <textarea name="message" rows={5} required className={fieldClass} />
        </label>
        <button
          type="submit"
          className="mt-2 w-fit cursor-pointer rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
        >
          {t("SEND")}
        </button>
      </form>

      <ul className="mt-14 flex flex-wrap gap-8">
        {socials.map((social) => (
          <li key={social.label} className="flex items-center gap-3">
            <Image
              src={social.icon}
              alt=""
              width={32}
              height={32}
              className="object-contain"
            />
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
