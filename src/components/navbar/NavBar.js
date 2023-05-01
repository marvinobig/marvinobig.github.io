import nav from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar({ navLinks }) {
  function mobileNav() {
    const navBtn = document.getElementById("list");
    navBtn.classList.toggle(nav.active);
  }

  return (
    <nav className={nav.nav}>
      <section className={nav.logo}>
        <p className={nav.title}>Marvin Obig</p>
        <button className={nav.btn} id="mobile-btn" onClick={mobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </section>

      <section className={nav.list}>
        <ul id="list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={`#${link}`}>{`${link
                .charAt(0)
                .toUpperCase()}${link.slice(1, link.length)}`}</a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
