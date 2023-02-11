import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Full Stack Web Development
                </h3>
                <span className="qualification_subtitle">
                  Masai School (Full Time)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  B.Tech - Electrical Engineering
                </h3>
                <span className="qualification_subtitle">
                  Haldia Institute of Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2020
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Higher Secondary Examination
                </h3>
                <span className="qualification_subtitle">
                  S.K.S. Public School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2015
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Secondary Examination</h3>
                <span className="qualification_subtitle">
                  S.K.S. Public School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2007 - 2013
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Fresher</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calender">
                  {/* <i className="uil uil-calendar-alt"></i> */}
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title"></h3>
                        <span className="qualification_subtitle"></span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>
                        </div>
                    </div>
                </div> */}

            {/* <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title"></h3>
                        <span className="qualification_subtitle"></span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
