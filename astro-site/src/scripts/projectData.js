import cv_builder from "../assets/images/cv-builder.jpg";
import elements from "../assets/images/elements.jpg";
import css from "../assets/icons/front-end/css.png";
import react from "../assets/icons/front-end/react.png";
import js from "../assets/icons/front-end/javascript.png";
import html from "../assets/icons/front-end/html.png";

const projects = [
  {
    name: "CV Builder",
    img: cv_builder,
    description: `This application is a CV web app that allows users to build a 
    CV/resume from the ground up.`,
    github: "https://github.com/marvinobig/cv-builder.git",
    live: "https://cv-builder-web.netlify.app/",
    technologies: [
      {
        img: js,
        alt: "javascript",
      },
      {
        img: react,
        alt: "react js",
      },
      {
        img: css,
        alt: "css",
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
        img: js,
        alt: "javascript",
      },
      {
        img: html,
        alt: "html",
      },
      {
        img: css,
        alt: "css",
      },
    ],
  },
];

export default projects;
