import React from "react";
import "./Footer.css";

const Footer = () => {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Monojit Mondal</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/monojit1696"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/ninja-mono1696"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://twitter.com/monojit_1696"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <p className="footer_copy">
          {/* &#169; All rigths reserved */}
          Made with
          <span style={{ margin: "0 0.5rem -1rem 0.5rem", fontSize: "26px" }}>
            ❤
          </span>
          by {shortname("Monojit Mondal")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
