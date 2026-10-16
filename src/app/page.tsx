import { useTranslations } from "next-intl";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.federicobarreiro.com/"
  },
  "headline": "Federico Barreiro Baima - Fullstack Developer",
  "description": "Portfolio of Federico Barreiro Baima, Fullstack Developer and software engineer taking products from idea to production across frontend, backend and deployment.",
  "image": "https://www.federicobarreiro.com/og-image.webp",
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
  title: "Federico Barreiro | Fullstack Developer",
  description: "Federico Barreiro Baima, Fullstack Developer. Software engineer taking products from idea to production across frontend, backend and deployment.",
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
    title: "Federico Barreiro | Fullstack Developer",
    description: "Federico Barreiro Baima, Fullstack Developer. Software engineer taking products from idea to production across frontend, backend and deployment.",
    images: [
      {
        url: "https://www.federicobarreiro.com/og-image.webp",
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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-contrast"
      >
        {t("SKIP_TO_CONTENT")}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
