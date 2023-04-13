import pcMasterRace from "../assets/images/pc-masterrace.jpg";
import cv_builder from "../assets/images/cv-builder.jpg";
import elements from "../assets/images/elements.jpg";
import track from "../assets/images/track.jpg";
import css from "../assets/Dev-icons/front-end/css.png";
import react from "../assets/Dev-icons/front-end/react.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import python from "../assets/Dev-icons/back-end/python.png";
import html from "../assets/Dev-icons/front-end/html.png";
import php from "../assets/Dev-icons/back-end/php.png";
import mySql from "../assets/Dev-icons/back-end/mySql.png";
import flask from "../assets/Dev-icons/back-end/flask.png";
import sql from "../assets/Dev-icons/back-end/sql.png";

const projects = [
  {
    name: "Bod Trac",
    img: track,
    description: `A website to track your body weight across time so you can keep track of your progress. 
    You can create/login to your own account, add and track your weight across time and have that data of 
    your weight lost and gained over time visualised.`,
    github: "https://github.com/marvinobig/bod-trac.git",
    live: "https://mobig.pythonanywhere.com/",
    technologies: [
      {
        img: python,
        alt: "python",
      },
      {
        img: flask,
        alt: "flask",
      },
      {
        img: sql,
        alt: "sql",
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
