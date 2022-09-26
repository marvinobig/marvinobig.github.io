import about from "./AboutMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <header className={about.about} id="about">
      <h2 className={about.title}>Hi, I'm Marvin</h2>
      <p>
        I'm a <span className={about.important}>fullstack developer</span>. The
        summer was about to end and I was heading into my third year at
        university. I was just googling around and I came across freeCodeCamp.
        That was when my journey into development really began. It was through
        freeCodeCamp that I learnt{" "}
        <span className={about.important}>HTML & CSS</span>.
      </p>

      <p>
        University taught me <span className={about.important}>JavaScript</span>{" "}
        but The Odin Project taught me to understand it, taught me to enjoy it
        and then taught me how to really learn. After my first experience with
        coding, I realised that this is something{" "}
        <span className={about.important}>I enjoy more than anything</span>,
        being able to have a mixture of{" "}
        <span className={about.important}>creativity and logic</span> and teach
        myself how to turn an idea into a product/service or develop someone's
        ideas into reality.{" "}
        <span className={about.important}>Download my CV/resume</span> with the
        button below.
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
