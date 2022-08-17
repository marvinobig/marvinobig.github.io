import bodTracImg from "../assets/images/track.jpg";
import cvBuilderImg from "../assets/images/cv-builder.jpg";
import newsRound from "../assets/images/news-round.jpg";
import html from "../assets/Dev-icons/front-end/html.png";
import css from "../assets/Dev-icons/front-end/css.png";
import sass from "../assets/Dev-icons/front-end/sass.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import react from "../assets/Dev-icons/front-end/react.png";
import python from "../assets/Dev-icons/back-end/python.png";
import flask from "../assets/Dev-icons/back-end/flask.png";
import node from "../assets/Dev-icons/back-end/nodeJs.png";
import express from "../assets/Dev-icons/back-end/expressJs.png";
import postre from "../assets/Dev-icons/back-end/postgreSql.png";

const projects = [
  {
    name: "News Round API",
    img: newsRound,
    description: `This project allows users to fetch articles and comments from other users, it allows users to also fetch usernames and topics from the database. Users can also partially update articles and post comments. This is still a work in progress as more endpoints are added & the front end is under development.`,
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
    name: "CV-Builder",
    img: cvBuilderImg,
    description: `A react JS application that allows users to generate a CV/resume 
    with all their personal details, education, work experience and skills and print 
    it off for use. This app makes use of react router.`,
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
    ],
  },
  {
    name: "Bod-Trac",
    img: bodTracImg,
    description: `Track your body weight across time so you can keep track of your progress. This app makes use of user authentication, SQLite and chart JS to track user inputted data.`,
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
