import NavBar from "../components/navbar/NavBar";
import AboutMe from "../components/aboutMe/AboutMe";
import SkillsCard from "../components/skillsCard/SkillsCard";
import ProjectsCard from "../components/projectsCard/ProjectsCard";
import Contacts from "../components/contact/Contacts";
import skillData from "../data/skillData";
import projectData from "../data/projectData";
import A from "./App.module.scss";

function App() {
  return (
    <div className={A.App}>
      <NavBar />
      <AboutMe />
      <SkillsCard skills={skillData} />
      <ProjectsCard infos={projectData} />
      <Contacts />
    </div>
  );
}

export default App;
