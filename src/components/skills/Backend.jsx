import React from "react";
import { FaNpm } from "react-icons/fa";
import { SiPostman, SiExpress } from "react-icons/si";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxl-nodejs skills_icon"></i>

            <div>
              <h3 className="skills_name">NodeJS</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <SiExpress className="skills_icon" />

            <div>
              <h3 className="skills_name">ExpressJS</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxl-mongodb skills_icon"></i>

            <div>
              <h3 className="skills_name">MongoDB</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxl-firebase skills_icon"></i>

            <div>
              <h3 className="skills_name">Firebase</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <FaNpm className="skills_icon" />

            <div>
              <h3 className="skills_name">npm</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <SiPostman className="skills_icon" />

            <div>
              <h3 className="skills_name">Postman</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
