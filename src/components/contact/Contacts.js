import contact from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <footer id="contact" className={contact.contact}>
      <div className={contact.container}>
        <a
          href="https://github.com/marvinobig"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a href="mailto:mobig.web@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faAt} />
        </a>
        <a
          href="https://www.linkedin.com/in/marvin-obigwilo/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Contacts;
