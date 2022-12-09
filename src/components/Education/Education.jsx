import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import style from './Education.module.css';
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData';

const Education = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <div className={style.education} id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className={style.education_body}>
                <div className={style.education_description}>
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className={style.education_image}>
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education;