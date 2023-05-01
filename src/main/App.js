import NavBar from "../components/navbar/NavBar";
import AboutMe from "../components/aboutMe/AboutMe";
import Experience from "../components/experience/Experience";
import ProjectsCard from "../components/projectsCard/ProjectsCard";
import Contacts from "../components/contact/Contacts";
import projectData from "../data/projectData";
import A from "./App.module.scss";

function App() {
  return (
    <div className={A.App}>
      <NavBar navLinks={["about", "experience", "projects", "contact"]} />
      <AboutMe />
      <Experience />
      <ProjectsCard infos={projectData} />
      <Contacts />
    </div>
  );
}

export default App;
