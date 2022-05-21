import bodTracImg from "../assets/images/track.jpg";
import elementsImg from "../assets/images/elements.jpg";
import cvBuilderImg from "../assets/images/cv-builder.jpg";
import memeImg from "../assets/images/meme-generator.jpg";
import recipes from "../assets/images/recipes.jpg";
import html from "../assets/Dev-icons/front-end/html.png";
import css from "../assets/Dev-icons/front-end/css.png";
import sass from "../assets/Dev-icons/front-end/sass.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import react from "../assets/Dev-icons/front-end/react.png";
import python from "../assets/Dev-icons/back-end/python.png";
import flask from "../assets/Dev-icons/back-end/flask.png";
import node from "../assets/Dev-icons/back-end/nodeJs.png";
import express from "../assets/Dev-icons/back-end/expressJs.png";
import mongoDB from "../assets/Dev-icons/back-end/mongoDb.png";
import webpack from "../assets/Dev-icons/tools/webpack.png";

const projects = [
  {
    name: "Recipes",
    img: recipes,
    description: `This application is a recipe website that allows users to 
    upload, view, edit and delete their food recipes.`,
    github: "https://github.com/marvinobig/recipes-wa.git",
    live: "https://recipes-wa.herokuapp.com/recipes",
    technologies: [
      {
        img: html,
        alt: "ejs",
      },
      {
        img: sass,
        alt: "sass/scss",
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
        img: mongoDB,
        alt: "mongoDB",
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
        alt: "sass/scss",
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
        alt: "sass/scss",
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
  {
    name: "Meme Generator",
    img: memeImg,
    description: `A react app that recives data from a meme API and then displays it on the users screen. 
    It allows the user to add text to whatever image is produced.`,
    github: "https://github.com/marvinobig/meme-generator.git",
    live: "https://marvinobig.github.io/meme-generator",
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
      {
        img: react,
        alt: "react",
      },
      {
        img: webpack,
        alt: "react",
      },
    ],
  },
  {
    name: "Bod-Trac",
    img: bodTracImg,
    description: `Track your body weight across time so you can keep track of your progress.`,
    github: "https://github.com/marvinobig/bod-trac.git",
    live: "https://mobig.pythonanywhere.com/",
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
      {
        img: python,
        alt: "python",
      },
      {
        img: flask,
        alt: "flask",
      },
    ],
  },
];

export default projects;
