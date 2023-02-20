import pcMasterRace from "../assets/images/pc-masterrace.jpg";
import elements from "../assets/images/elements.jpg";
import css from "../assets/Dev-icons/front-end/css.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import html from "../assets/Dev-icons/front-end/html.png";
import php from "../assets/Dev-icons/back-end/php.png";
import mySql from "../assets/Dev-icons/back-end/mySql.png";

const projects = [
  {
    name: "PC Master Race",
    img: pcMasterRace,
    description: `An e-commerce website that sells pc parts and accessories. 
    The project includes MySQL database capabilities and can add products to a basket, 
    register and login users and also display product information stored on a database table.`,
    github: "https://github.com/marvinobig/pcmasterrace.git",
    live: "https://pcmasterracemobig.000webhostapp.com",
    technologies: [
      {
        img: html,
        alt: "html",
      },
      {
        img: css,
        alt: "css",
      },
      {
        img: php,
        alt: "PHP",
      },
      {
        img: js,
        alt: "javascript",
      },
      {
        img: mySql,
        alt: "MySQL",
      },
    ],
  },
  {
    name: "Elements",
    img: elements,
    description: `A PWA (Progressive Web App) that allows 
    users to fetch weather data for a specific location. 
    It also provides a 7 day forecast from the current day.`,
    github: "https://github.com/marvinobig/elements.git",
    live: "https://elements-wa.netlify.app/",
    technologies: [
      {
        img: html,
        alt: "html",
      },
      {
        img: css,
        alt: "css",
      },
      {
        img: js,
        alt: "javascript",
      },
    ],
  },
];

export default projects;
