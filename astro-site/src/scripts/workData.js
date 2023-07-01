import git from "../assets/icons/tools/git.png";
import html from "../assets/icons/front-end/html.png";
import scss from "../assets/icons/front-end/scss.png";
import bootstrap from "../assets/icons/front-end/bootstrap.png";
import js from "../assets/icons/front-end/javascript.png";
import drupal from "../assets/icons/tools/drupal.png";

const workData = [
  {
    company: "Adaptive Web",
    title: "Apprentice Software Developer",
    time: ["2022-11-14", "Present"],
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

export default workData;
