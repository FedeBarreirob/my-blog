import { Project } from "@/app/types/project";

export const getProjects = (t: (key: string) => string): Project[] => {
    const POWERMATE: Project = {
        title: "Powermate",
        image: "/powermeter_logo.jpg",
        description: t("DESCRIPTION_POWERMATE"),
        rol: t("FRONTEND_DEVELOPER"),
        link: 'https://powermate.powermeter.com.ar/demo/general'
    };

    const SILOHUB: Project = {
        title: "Silohub",
        image: "/silohub_logo.jpg",
        description: t("DESCRIPTION_SILOHUB"),
        rol: t("FULLSTACK_DEVELOPER"),
        link: 'https://pwa-portal-qa.silohub.ag/'
    };

    const SYNDENO: Project = {
        title: "Syndeno",
        image: "/syndeno_logo.png",
        description: t("DESCRIPTION_SYNDENO"),
        rol: t("FULLSTACK_DEVELOPER"),
        link: 'https://syndeno.cloud/'
    };

    const DIVIDENDO: Project = {
        title: "Dividendo",
        image: "/dividendo_logo.webp",
        description: t("DESCRIPTION_DIVIDENDO"),
        rol: t("OWNER"),
        link: 'https://dividendo.site/'
    };

    return [POWERMATE, SYNDENO, SILOHUB, DIVIDENDO];
};