import { useTranslations } from "next-intl";
import SwitchLanguage from "./SwitchLanguage";

const links = [
  { key: "NAV_PROJECTS", href: "#projects" },
  { key: "NAV_CONTACT", href: "#contact" },
];

export default function Navbar() {
  const t = useTranslations("");
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav
        aria-label={t("NAV_LABEL")}
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <a href="#top" className="hidden font-semibold tracking-tight sm:inline">
          FB
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="flex items-center gap-3 text-xs text-muted sm:gap-6 sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <SwitchLanguage />
        </div>
      </nav>
    </header>
  );
}
