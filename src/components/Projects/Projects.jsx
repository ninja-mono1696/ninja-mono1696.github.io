import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import style from './Projects.module.css';
import SingleProject from './SingleProject/SingleProject';

const Projects = () => {

    const { theme } = useContext(ThemeContext);

    
    const styles = {
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    };

    return (
        <>
            {projectsData.length > 0 && (
                <div className={style.projects} id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className={style.projects_header}>
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className={style.projects_body}>
                        <div className={style.projects_bodyContainer}>
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 

                        {projectsData.length > 3 && (
                            <div className={style.projects_viewAll}>
                                <Link to="/projects">
                                    <button style={styles.viewAllBtn}>
                                        View All
                                        <HiArrowRight style={styles.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects;