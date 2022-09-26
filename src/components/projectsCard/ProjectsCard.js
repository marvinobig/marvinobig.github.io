import project from "./ProjectsCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function ProjectsCard({ infos }) {
  return (
    <section id="projects" className={project.projects}>
      <h2 className={project.title}>Projects</h2>
      <div className={project.cardContainer}>
        {infos.map((info, index) => (
          <div className={project.card} key={index}>
            <div>
              <h3 className={project.heading}>{info.name}</h3>
              <img className={project.img} src={info.img} alt={info.name} />
              <p className={project.description}>{info.description}</p>
            </div>
            <div>
              <div className={project.techDisplay}>
                {info.technologies.map((tech, index) => (
                  <img
                    className={project.techImg}
                    src={tech.img}
                    alt={tech.alt}
                    key={index}
                  />
                ))}
              </div>
              <div className={project.actions}>
                <a href={info.live} target="_blank" rel="noreferrer">
                  <button className={project.btn}>
                    <FontAwesomeIcon icon={faEye} />
                    View
                  </button>
                </a>
                <a href={info.github} target="_blank" rel="noreferrer">
                  <button className={project.btn}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsCard;
