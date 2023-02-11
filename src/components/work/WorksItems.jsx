import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="project" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <p className="work_description">{item.description}</p>
      <p className="work_tech">
        <b>Tech Stack</b> - <br /> {item.tech}
      </p>
      <div className="work_button-div">
        <a href={item.demo} target="_blank" rel="noreferrer" className="work_button">
          Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>

        <a href={item.code} target="_blank" rel="noreferrer" className="work_button">
          gitHub <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
