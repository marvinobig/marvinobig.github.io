import pcMasterRace from "../assets/images/pc-masterrace.jpg";
import newsRoundFrontend from "../assets/images/news-round-frontend.jpg";
import newsRound from "../assets/images/news-round.jpg";
import elements from "../assets/images/elements.jpg";
import bodTrac from "../assets/images/track.jpg";
import css from "../assets/Dev-icons/front-end/css.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import html from "../assets/Dev-icons/front-end/html.png";
import react from "../assets/Dev-icons/front-end/react.png";
import node from "../assets/Dev-icons/back-end/nodeJs.png";
import express from "../assets/Dev-icons/back-end/expressJs.png";
import php from "../assets/Dev-icons/back-end/php.png";
import postre from "../assets/Dev-icons/back-end/postgreSql.png";
import mySql from "../assets/Dev-icons/back-end/mySql.png";
import sql from "../assets/Dev-icons/back-end/sql.png";
import python from "../assets/Dev-icons/back-end/python.png";
import flask from "../assets/Dev-icons/back-end/flask.png";

const projects = [
  {
    name: "Bod Trac",
    img: bodTrac,
    description: `This website allows you to create/login to your own account from any device, 
    Add and track your weight across time, add and track your weight using your account & have your
    data visualised for easy viewing.`,
    github: "https://github.com/marvinobig/bod-trac.git",
    live: "https://mobig.pythonanywhere.com/",
    technologies: [
      {
        img: html,
        alt: "python",
      },
      {
        img: css,
        alt: "css",
      },
      {
        img: python,
        alt: "pyhton",
      },
      {
        img: flask,
        alt: "flask",
      },
      {
        img: sql,
        alt: "SQLite",
      },
    ],
  },
  {
    name: "News Round API",
    img: newsRound,
    description: `This API allows users to fetch articles and comments from other users, 
    it allows users to also fetch usernames and topics from the database. Users can also partially update articles, 
    add articles and post comments.`,
    github: "https://github.com/marvinobig/news-round-api",
    live: "https://news-round-api.herokuapp.com/",
    technologies: [
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
        img: postre,
        alt: "postgreSQL",
      },
    ],
  },
  {
    name: "News Round Frontend",
    img: newsRoundFrontend,
    description: `This is the React Js frontend for the News Round API. 
    This React SPA is for social news aggregation, web content rating, 
    and discussions. It links to the News Round API that hosts and 
    sends the data being displayed by the website.`,
    github: "https://github.com/marvinobig/news-round.git",
    live: "https://news-round.netlify.app/",
    technologies: [
      {
        img: react,
        alt: "react",
      },
      {
        img: js,
        alt: "javascript",
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
