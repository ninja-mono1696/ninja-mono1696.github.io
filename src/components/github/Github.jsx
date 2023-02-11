import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github = () => {
  return (
    <section className="github section" id="Github">
      <h2 className="section_title">gitHub</h2>
      <span className="section_subtitle">Calender And Stats</span>

      <div className="github_container container">
        <a href="https://github.com/ninja-mono1696" target="_blank" rel="noreferrer">
          <GitHubCalendar username="ninja-mono1696" className="calender" />
        </a>
      </div>
      <div className="github_container container">
        <a href="https://github.com/ninja-mono1696" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=ninja-mono1696&show_icons=true&count_private=true&theme=algolia"
            height="192px"
          />
        </a>
      </div>
    </section>
  );
};

export default Github;
