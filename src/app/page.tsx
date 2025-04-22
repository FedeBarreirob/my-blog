import { useTranslations } from "next-intl";
import Avatar from "./components/Avatar";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import SwitchLanguage from "./components/SwitchLanguage";
import { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.federicobarreiro.com/"
  },
  "headline": "Federico Barreiro's Portfolio",
  "description": "Federico Barreiro's portfolio showcasing web development projects and skills.",
  "image": "https://www.federicobarreiro.com/public/og-image.webp",
  "author": {
      "@type": "Person",
      "name": "Federico Barreiro",
      "url": "https://www.linkedin.com/in/federico-barreirob/"
  },
  "publisher": {
      "@type": "Organization",
      "name": "Federico Barreiro",
      "logo": {
          "@type": "ImageObject",
          "url": ""
      }
  },
  "datePublished": "2025-04-22",
  "dateModified": "2025-04-22"
}

export const metadata: Metadata = {
  title: "Federico Barreiro",
  description: "Federico Barreiro's portfolio.",
  keywords: [
    "Federico Barreiro",
    "portfolio",
    "web development",
    "frontend development",
    "fullstack developer",
    "angular",
    "react",
    "next.js",
    "javaScript",
    "typeScript",
    "UI/UX",
  ],
  openGraph: {
    url: "https://www.federicobarreiro.com",
    type: "website",
    title: "Federico Barreiro",
    description: "Federico Barreiro's portfolio.",
    images: [
      {
        url: "https://www.federicobarreiro.com/public/og-image.webp",
        width: 1200,
        height: 584,
        alt: "Federico Barreiro Portfolio",
      }
    ]
  },
  alternates: {
    canonical: "https://www.federicobarreiro.com"
  }
};

export default function Home() {
  const t = useTranslations("");

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <SwitchLanguage />
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Avatar />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                {t("HI_IM_FEDERICO")}
              </h1>
              <p className="text-lg md:text-xl mt-4 text-gray-600">
                {t("DESCRIPTION_TEXT")}
              </p>
            </div>
          </div>

          <div className="w-full text-center space-x-4">
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-xl font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
            >
              {t("SEE_PROJECTS")}
            </a>

            <a
              href="#stack"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-xl font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
            >
              {t("SEE_STACK")}
            </a>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-xl font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
            >
              {t("CONTACT")}
            </a>
          </div>
        </main>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </div>
      <Projects />
      <Stack />
      <Contact />
    </>
  );
}
