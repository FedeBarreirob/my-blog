import { Project } from "@/app/types/project";

export const getProjects = (t: (key: string) => string): Project[] => {
    const PROWINCH: Project = {
        title: "Prowinch",
        image: "/prowinch_logo.png",
        description: t("DESCRIPTION_PROWINCH"),
        rol: t("SOFTWARE_ENGINEER"),
        link: 'https://www.linkedin.com/company/prowinchworldwide/',
        tech: ["Next.js", "Node.js", "SSR", "Core Web Vitals"]
    };

    const POWERMATE: Project = {
        title: "Powermate",
        image: "/powermate_logo.svg",
        description: t("DESCRIPTION_POWERMATE"),
        rol: t("FRONTEND_DEVELOPER"),
        link: 'https://powermate.powermeter.com.ar/demo/general',
        tech: ["React.js"]
    };

    const SILOHUB: Project = {
        title: "Silohub",
        image: "/silohub_logo.jpg",
        description: t("DESCRIPTION_SILOHUB"),
        rol: t("FULLSTACK_DEVELOPER"),
        link: 'https://pwa-portal-qa.silohub.ag/',
        tech: ["Angular", "Java", "Microservices", "Deployment automation"]
    };

    const SYNDENO: Project = {
        title: "Syndeno",
        image: "/syndeno_logo.png",
        description: t("DESCRIPTION_SYNDENO"),
        rol: t("FULLSTACK_DEVELOPER"),
        link: 'https://syndeno.cloud/',
        tech: ["Angular", "Node.js", "AWS", "Cypress", "CI/CD"]
    };

    return [PROWINCH, POWERMATE, SYNDENO, SILOHUB];
};
