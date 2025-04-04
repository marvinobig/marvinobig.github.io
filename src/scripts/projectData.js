import css from "../assets/icons/front-end/css.png";
import js from "../assets/icons/front-end/javascript.png";
import bootstrap from "../assets/icons/front-end/bootstrap.png";
import php from "../assets/icons/back-end/php.png";
import python from "../assets/icons/back-end/python.png";
import flask from "../assets/icons/tools/flask.png";
import laravel from "../assets/icons/tools/laravel.png";
import aws from "../assets/icons/deployment/aws.png";
import sqlite from "../assets/icons/back-end/sqlite.png";
import html from "../assets/icons/front-end/html.png";
import orq from "../assets/images/project-imgs/orq.png"
import bodtrac from "../assets/images/project-imgs/bod-trac.png"

const projects = [
    {
        name: "ORQ (One Rep Quest)",
        img: orq,
        description: `A fitness web app that allows users to create and login to accounts to enable the creation of workout templates that users can use to generate workout logs.`,
        github: "https://github.com/marvinobig/orq-project.git",
        live: "http://3.88.164.232/",
        technologies: [
            {
                img: aws,
                alt: "aws",
            },
            {
                img: laravel,
                alt: "laravel",
            },
            {
                img: php,
                alt: "php",
            },
            {
                img: js,
                alt: "javascript",
            },
            {
                img: bootstrap,
                alt: "bootstrap 5",
            },
            {
                img: html,
                alt: "html",
            },
        ],
    },
    {
        name: "Bod-trac",
        img: bodtrac,
        description: `Track your body weight & BMI across time so you can keep track of your progress.`,
        github: "https://github.com/marvinobig/bod-trac.git",
        live: "https://mobig.pythonanywhere.com/",
        technologies: [
            {
                img: sqlite,
                alt: "sqlite",
            },
            {
                img: flask,
                alt: "flask",
            },
            {
                img: python,
                alt: "python",
            },
            {
                img: css,
                alt: "css",
            },
            {
                img: html,
                alt: "html",
            },
        ],
    },
];

export default projects;
