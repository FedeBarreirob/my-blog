import { Project } from "@/app/types/project";

const POWERMATE: Project = {
    title: "Powermate",
    image: "/powermeter_logo.jpg",
    description: "Empresa especializada en soluciones de Gestión Energética para la optimización y reducción del consumo de energía eléctrica. La plataforma permite a los usuarios gestionar su consumo energético mediante un sistema de gestión de energía, que incluye la posibilidad de visualizar el consumo, recibir alertas y reportes, y gestionar la infraestructura eléctrica.",
    rol: "Desarrollador Frontend",
    link: 'https://powermate.powermeter.com.ar/demo/general'
}

const SILOHUB: Project = {
    title: "Silohub",
    image: "/silohub_logo.jpg",
    description: "Solución integral para digitalizar el relacionamiento de los acopios, cooperativas y agronomías con sus clientes productores. La plataforma contempla funciones de auto consulta de información, gestión transaccional de los negocios de granos e insumos, soluciones de pago y más.",
    rol: "Desarrollador Fullstack",
    link: 'https://pwa-portal-qa.silohub.ag/'
}

const SYNDENO: Project = {
    title: "Syndeno",
    image: "/syndeno_logo.png",
    description: "Plataforma que ofrece a empresas servicios de gestión de infraestructura para su propio software. Mediante una aplicación, el usuario es capaz de ver su información y cluster de Kubernetes, como también configurar y desplegar sus aplicaciones.",
    rol: "Desarrollador Fullstack",
    link: 'https://syndeno.cloud/'
}

const DIVIDENDO: Project = {
    title: "Dividendo",
    image: "/dividendo_logo.webp",
    description: "Aplicación para gestionar y dividir gastos fácilmente. Ideal para viajes, reuniones con amigos, eventos y más.",
    rol: "Founder",
    link: 'https://dividendo.site/'
}
export const projects = [
    POWERMATE,
    SYNDENO,
    SILOHUB,
    DIVIDENDO
]
