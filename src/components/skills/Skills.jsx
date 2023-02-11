import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Tools from "./Tools";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
