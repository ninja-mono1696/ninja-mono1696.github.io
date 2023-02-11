import React from "react";
import { SiChakraui, SiVisualstudio, SiNetlify, SiGithub, SiSlack } from "react-icons/si";
import { FaGit } from "react-icons/fa";

const Tools = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Tools & Libraries</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <SiChakraui className="skills_icon" />

            <div>
              <h3 className="skills_name">Chakra-UI</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <FaGit className="skills_icon" />

            <div>
              <h3 className="skills_name">Git</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <SiVisualstudio className="skills_icon" />

            <div>
              <h3 className="skills_name">Visual Studio</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <SiNetlify className="skills_icon" />

            <div>
              <h3 className="skills_name">Netlify</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <SiGithub className="skills_icon" />

            <div>
              <h3 className="skills_name">gitHub</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <SiSlack className="skills_icon" />

            <div>
              <h3 className="skills_name">Slack</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
