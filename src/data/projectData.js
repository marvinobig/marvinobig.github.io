import recipeImg from "../assets/images/recipes.jpg";
import elementsImg from "../assets/images/elements.jpg";
import cvBuilderImg from "../assets/images/cv-builder.jpg";
import html from "../assets/Dev-icons/front-end/html.png";
import sass from "../assets/Dev-icons/front-end/sass.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import react from "../assets/Dev-icons/front-end/react.png";
import node from "../assets/Dev-icons/back-end/nodeJs.png";
import express from "../assets/Dev-icons/back-end/expressJs.png";
import mongo from "../assets/Dev-icons/back-end/mongoDb.png";
import webpack from "../assets/Dev-icons/tools/webpack.png";

const projects = [
  {
    name: "Recipes",
    img: recipeImg,
    description: `This application is a recipe web app that allows users to upload,
    view, edit and delete their food recipes.`,
    github: "https://github.com/marvinobig/recipes-wa.git",
    live: "https://recipes-wa.herokuapp.com/recipes",
    technologies: [
      {
        img: html,
        alt: "html",
      },
      {
        img: sass,
        alt: "sass",
      },
      {
        img: js,
        alt: "javascript",
      },
      {
        img: node,
        alt: "node js",
      },
      {
        img: express,
        alt: "express js",
      },
      {
        img: mongo,
        alt: "mongo db",
      },
    ],
  },
  {
    name: "Elements",
    img: elementsImg,
    description: `A PWA (Progressive Web App) that allows users to fetch weather
    data for a specific location. It also provides a 7 day forecast
    from the current day.`,
    github: "https://github.com/marvinobig/elements.git",
    live: "https://elements-wa.netlify.app/",
    technologies: [
      {
        img: html,
        alt: "html",
      },
      {
        img: sass,
        alt: "sass",
      },
      {
        img: js,
        alt: "javascript",
      },
      {
        img: webpack,
        alt: "webpack",
      },
    ],
  },
  {
    name: "CV-Builder",
    img: cvBuilderImg,
    description: `A react JS application that allows users to generate a CV/resume 
    with all their personal details, education, work experience and skills and print 
    it off for use. I used this to make my resume.`,
    github: "https://github.com/marvinobig/cv-builder.git",
    live: "https://marvinobig.github.io/cv-builder/",
    technologies: [
      {
        img: html,
        alt: "html",
      },
      {
        img: sass,
        alt: "sass",
      },
      {
        img: js,
        alt: "javascript",
      },
      {
        img: react,
        alt: "react",
      },
      {
        img: webpack,
        alt: "webpack",
      },
    ],
  },
];

export default projects;
