import Wordle from "../../../assets/wordle.jpg";
import SaladRestaurant from "../../../assets/salad-restaurant.jpg";
import Portfolio from "../../../assets/portfolio.jpg";
import Fakebook from "../../../assets/fakebook.jpg";
import Ecommerce from "../../../assets/ecommerce.jpg";
import Leica from "../../../assets/leica.jpg";
import Presupuesto from "../../../assets/presupuesto.jpg";
import Citas from "../../../assets/citas.jpg";
import Code from "../../../assets/code.jpeg";
import RetroTech from "../../../assets/retrotech.jpg";
import Yavoy from "../../../assets/yavoy.jpg";
import Room3D from "../../../assets/room-3d.jpg";
import MiniTeclado from "../../../assets/mini-teclado.jpg";
import WorkInProgress from "../../../assets/wip.jpeg";

export const frontendProjectsData = [
  {
    id: 1,
    image: `${Wordle}`,
    title: "Wordle Game",
    github: "https://github.com/Guillx/wordle_game",
    demo: "https://guillx.github.io/wordle_game/",
    demoButton: true,
    description: "Clon del famoso juego 'Wordle' desarrollado con React",
  },
  {
    id: 2,
    image: `${Ecommerce}`,
    title: "Ecommerce",
    github: "https://github.com/Guillx/ecommerce_frontend",
    demo: "",
    demoButton: false,
    description: "Front end de un ecommerce de figuras Funko Pop y merch.",
  },
  {
    id: 3,
    image: `${SaladRestaurant}`,
    title: "Tienda de Ensaladas",
    github: "https://github.com/Guillx/salad_restaurant",
    demo: "",
    demoButton: false,
    description: "Proyecto para practicar maquetación: tienda de ensaladas.",
  },
  {
    id: 4,
    image: `${Fakebook}`,
    title: "Fakebook",
    github: "https://github.com/Guillx/social-feisbuk",
    demo: "https://www.youtube.com/watch?v=p3CqWCvRT1Q&list=PL8e_-D4SZhqrBOu3zxXrAJqXK9LIbuC1q&index=4",
    demoButton: true,
    description: "Proyecto para practicar maquetación: red social Facebook.",
  },
  {
    id: 5,
    image: `${Presupuesto}`,
    title: "Control de gastos",
    github: "https://github.com/Guillx/control-presupuesto",
    demo: "https://www.youtube.com/watch?v=mk1p0BOUphg&list=PL8e_-D4SZhqrBOu3zxXrAJqXK9LIbuC1q&index=6",
    demoButton: true,
    description:
      "Front End de una web que calcula gastos a partir de un presupuesto definido.",
  },
  {
    id: 6,
    image: `${Citas}`,
    title: "Gestor de citas",
    github: "https://github.com/Guillx/gestor-citas",
    demo: "https://www.youtube.com/watch?v=QqMzLXV2Idk&list=PL8e_-D4SZhqrBOu3zxXrAJqXK9LIbuC1q&index=5",
    demoButton: true,
    description:
      "Front End de una web que gestiona citas de pacientes para vacunación.",
  },
  {
    id: 7,
    image: `${Leica}`,
    title: "Landing page Leica",
    github: "https://github.com/Guillx/leica-camera-design",
    demo: "https://www.youtube.com/watch?v=Hg9IQTJ8yeA&list=PL8e_-D4SZhqrBOu3zxXrAJqXK9LIbuC1q&index=3",
    demoButton: true,
    description:
      "Maquetación de una landing page de una cámara de fotos Leica.",
  },
  {
    id: 8,
    image: `${Portfolio}`,
    title: "Mi primer portfolio",
    github: "https://github.com/Guillx/guillx_web",
    demo: "https://guillx.github.io/guillx_web/",
    demoButton: true,
    description:
      "Mi primer portfolio, con el que conseguí mi primer trabajo como programador :)",
  },
];

export const backendProjectsData = [
  {
    id: 1,
    image: `${Code}`,
    title: "Ecommerce",
    github: "https://github.com/Guillx/ecommerce_api",
    description: "Servidor backend con CRUD para un ecommerce.",
  },
];

export const fullstackProjectsData = [
  {
    id: 1,
    image: `${WorkInProgress}`,
    title: "MERN Ecommerce",
    github: "https://github.com/Guillx/ecommerce_api",
    demo: "",
    demoButton: false,
    description: "Ecommerce realizado con el Stack MERN.",
  },
  {
    id: 2,
    image: `${RetroTech}`,
    title: "RetroTech",
    github: "https://github.com/Guillx/RetroTech",
    demo: "https://www.youtube.com/watch?v=wMkquNbgk-0&list=PL8e_-D4SZhqrBOu3zxXrAJqXK9LIbuC1q&index=8",
    demoButton: true,
    description:
      "Proyecto de fin de Bootcamp. Se trata de una plataforma de compra y venta de tecnología retro.",
  },
];

export const designProjectsData = [
  {
    id: 1,
    image: `${Yavoy}`,
    title: "Yavoy UI",
    demo: "https://www.figma.com/file/lNCsUNDGxJ5E30UHRcg7rn/YAVOY_design?node-id=0%3A1",
    description:
      "Proyecto final del curso de UX y CRO. Se trata de una aplicación como Glovo o Just Eat.",
  },
  {
    id: 2,
    image: `${Room3D}`,
    title: "Tiny Room 3D",
    demo: "https://my.spline.design/untitled-05d354d634b85b5bdd2c01ae6c61ccd2/",
    description:
      "Habitación en 3D con animaciones creada con Spline (el enlace de visualización puede tardar en cargar)",
  },
  {
    id: 3,
    image: `${MiniTeclado}`,
    title: "Teclado 3D",
    demo: "https://my.spline.design/keyboard-dad7199ce79fac9fd6f1be09aadb2a09/",
    description: "Teclado numérico en 3D con animaciones.",
  },
];
