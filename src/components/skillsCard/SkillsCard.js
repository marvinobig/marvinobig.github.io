import skillCard from "./SkillsCard.module.scss";

function SkillsCard({ skills }) {
  function revealSkill(e) {
    e.currentTarget.lastElementChild.style.display = "block";
  }

  function hideSkill(e) {
    e.currentTarget.lastElementChild.style.display = "none";
  }

  return (
    <section className={skillCard.skills} id="skills">
      <h2 className={skillCard.title}>Skills</h2>
      <div className={skillCard.skillsContainer}>
        {skills.map((skill, index) => (
          <div
            className={skillCard.imgContainer}
            id="skill"
            onMouseEnter={revealSkill}
            onMouseLeave={hideSkill}
            key={index}
          >
            <img
              className={skillCard.skillImg}
              src={skill.img}
              alt={skill.alt}
            />
            <p className={skillCard.skillName}>{skill.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsCard;
