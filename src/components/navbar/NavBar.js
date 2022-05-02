import nav from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  function mobileNav() {
    const navBtn = document.getElementById("list");
    navBtn.classList.toggle(nav.active);
  }

  return (
    <nav className={nav.nav}>
      <div className={nav.div}>
        <p className={nav.title}>Marvin Obigwilo</p>
        <button className={nav.btn} id="mobile-btn" onClick={mobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className={nav.list}>
        <ul id="list">
          <li>
            <a href="#about" onClick={mobileNav}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={mobileNav}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={mobileNav}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={mobileNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
