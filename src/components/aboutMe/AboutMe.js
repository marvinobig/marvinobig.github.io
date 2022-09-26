import about from "./AboutMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <header className={about.about} id="about">
      <h2 className={about.title}>Hi, I'm Marvin</h2>
      <p>
        I'm a <span className={about.important}>fullstack developer</span>.
      </p>

      <p>
        Having always valued{" "}
        <span className={about.important}>
          continuous learning and self-improvement
        </span>
        , I enrolled at Northcoders to learn and develop my knowledge within the
        Software Development field.{" "}
        <span className={about.important}>Northcoders</span> has allowed me to
        be surrounded by peers of likeminded junior developers, which I find
        invaluable for motivation and success. Prior to Northcoders, I had been
        learning to code on my own for around one year, using resources such as{" "}
        <span className={about.important}>
          freeCodeCamp, The Odin Project & Youtube.
        </span>
      </p>
      <a href="#" target="_blank" rel="noreferrer">
        <button className={about.btn}>
          <FontAwesomeIcon icon={faBlog} />
          Blog (Coming Soon)
        </button>
      </a>
    </header>
  );
}

export default AboutMe;
