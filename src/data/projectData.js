import bodTracImg from "../assets/images/track.jpg";
import newsRoundFrontend from "../assets/images/news-round-frontend.jpg";
import newsRound from "../assets/images/news-round.jpg";
import html from "../assets/Dev-icons/front-end/html.png";
import css from "../assets/Dev-icons/front-end/css.png";
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
    description: `This project allows users to fetch articles and comments from other users, it allows users to also fetch usernames and topics from the database. Users can also partially update articles, add articles and post comments.`,
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
    This react front end is a social news aggregation, web content rating, 
    and discussion website that links to the News Round API that hosts and 
    send the data being displayed by the website.`,
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
