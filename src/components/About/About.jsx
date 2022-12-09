import React, { useContext } from 'react';

import style from './About.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';



const About = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <div className={style.about} id="about" style={{backgroundColor: theme.secondary}}>
            <div className={style.line_styling}>
              <div className={style.style_circle} style={{backgroundColor: theme.primary}}></div>
              <div className={style.style_circle} style={{backgroundColor: theme.primary}}></div>
              <div className={style.style_line} style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className={style.about_body}>
                <div className={style.about_description}>
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className={style.about_img}>
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About;