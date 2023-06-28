import git from "../assets/Dev-icons/tools/git.png";
import html from "../assets/Dev-icons/front-end/html.png";
import scss from "../assets/Dev-icons/front-end/scss.png";
import bootstrap from "../assets/Dev-icons/front-end/bootstrap.png";
import js from "../assets/Dev-icons/front-end/javascript.png";
import drupal from "../assets/Dev-icons/tools/drupal.png";

const workExperience = [
  {
    companyName: "Adaptive Web",
    timeWorkedFor: ["2022-11-14", "Present"],
    companyDescription:
      "Adaptive are Drupal support, development and hosting specialists. They work with a wide range of clients from international brands and public sector organisations through to large non-profit charities.",
    companyLink: "https://www.adaptive.co.uk/team",
    achievements: [
      "Moved parts of the mencap website over to bootstrap 5, SCSS & ES6 JavaScript from bootstrap 4, CSS & jQuery",
      "Helped implement the design for the CMSGuard.io landing page",
      "Added to company documentation which sped up developer workflow",
    ],
    skillsUsed: [
      {
        img: git,
        alt: "Git",
      },
      {
        img: html,
        alt: "HTML",
      },
      {
        img: scss,
        alt: "SCSS",
      },
      {
        img: bootstrap,
        alt: "Bootstrap 5",
      },
      {
        img: js,
        alt: "Javascript",
      },
      {
        img: drupal,
        alt: "Drupal",
      },
    ],
  },
];

export default workExperience;
