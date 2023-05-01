import about from "./AboutMe.module.scss";
import SkillsCard from "../skillsCard/SkillsCard";
import skillData from "../../data/skillData";

function AboutMe() {
  return (
    <header className={about.about} id="about">
      <section className={about.me}>
        <h2 className={about.title}>Hi, I'm Marvin</h2>

        <p>
          I'm a <span className={about.important}>fullstack developer</span>.
          <br />
          After my first experience with coding, I realized that this is
          something I enjoyed a lot, being able to have a mixture of creativity
          and logic and turning an idea into a product/service. In my spare
          time, I try to expand and develop my skills as much as I can by
          completing online courses and carrying out my own projects.
        </p>
      </section>

      <SkillsCard skills={skillData} />
    </header>
  );
}

export default AboutMe;
