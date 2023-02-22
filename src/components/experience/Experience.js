import experience from "./Experience.module.scss";
import workExperience from "../../data/experienceData";
import moment from "moment";

const Experience = () => {
  return (
    <section id="experience" className={experience.experience}>
      <h2 className={experience.title}>Work Experience</h2>
      <div className={experience.experienceContainer}>
        {workExperience.map((work, index) => (
          <div key={index}>
            <h2 className={experience.workTitles}>
              <a className={experience.workLink} href={work.companyLink}>
                {work.companyName}
              </a>{" "}
              -- {moment(work.timeWorkedFor[0]).format("MMM Do YYYY")} to{" "}
              {work.timeWorkedFor[1]}
            </h2>
            <p className={experience.seperator}>{work.companyDescription}</p>
            <div>
              <h3 className={experience.workTitles}>My Duties</h3>
              <ul className={experience.dutyList}>
                {work.myDuties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            </div>
            <div className={experience.skillList}>
              <h3
                className={`${experience.workTitles} ${experience.skillTitle}`}
              >
                Skills Used
              </h3>
              <ul className={experience.skillIcons}>
                {work.skillsUsed.map((skill, index) => (
                  <li key={index}>
                    <img
                      className={experience.skillImg}
                      src={skill.img}
                      alt={skill.alt}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
