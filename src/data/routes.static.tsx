type Route = {
  title: string;
  path?: string;
  scroll?: string;
};

const routes: Route[] = [
  {
    title: "Inicio",
    path: "/",
    scroll: "#home-section",
  },
  {
    title: "Conócenos",
    path: "/",
    scroll: "#about-section",
  },
  {
    title: "Servicios",
    path: "/",
    scroll: "#services-section",
  },
  {
    title: "Proyectos",
    path: "/",
    scroll: "#projects-section",
  },
  {
    title: "Contáctenos",
    path: "/",
    scroll: "#contact-section",
  },
];

export default routes;
