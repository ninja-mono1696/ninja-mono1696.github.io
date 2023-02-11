import React, { useState } from "react";
import "./Header.css";
import CV from "../../assets/data/Monojit-Mondal-Resume.pdf";

const Header = () => {
  /*======================= Change Background Header ================*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*======================= Toggle Menu ================*/
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Monojit Mondal
        </a>

        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            {/* <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-briefcase-alt nav_icon"></i> Services
              </a>
            </li> */}

            <li className="nav_item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>

            <li className="nav_item">
              <a
                download=""
                href={CV}
                onClick={() => window.open("https://drive.google.com/file/d/17twPHWa1HAxNdFG1vlDPk-OBQbUiKYC9/view?usp=sharing")}
                className="nav_link">
                <i className="uil uil-blogger-alt nav_icon"></i> Resume
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
