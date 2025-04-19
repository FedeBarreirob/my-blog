"use client";
import Image from "next/image";
import { useLanguage } from "../hooks/useLanguage";
import { setUserLocale } from "../services/lang";

export default function SwitchLanguage() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (language: string) => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    setUserLocale(newLang);
  };

  const getFlagIcon = (language: string) => {
    return language === "en" ? "es" : "en";
  }

  const getFlag = (language: string) => {
    return (
      <div className="absolute top-4 right-4">
        <Image
          src={`/icons/${getFlagIcon(language)}.svg`}
          alt={language}
          className="object-contain cursor-pointer"
          width={40}
          height={40}
          onClick={() => toggleLanguage(language)}
        />
      </div>
    );
  };

  return <>{getFlag(language)}</>;
}
