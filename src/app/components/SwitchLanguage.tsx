"use client";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "../services/lang";

export default function SwitchLanguage() {
  const locale = useLocale();
  const t = useTranslations("");
  const next = locale === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => setUserLocale(next)}
      aria-label={t("SWITCH_LANGUAGE")}
      className="cursor-pointer rounded-md border border-line px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {next}
    </button>
  );
}
