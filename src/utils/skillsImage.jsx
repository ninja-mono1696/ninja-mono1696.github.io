import html from '../assets/svg/skills/html.svg';
import css from '../assets/svg/skills/css.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import react from '../assets/svg/skills/react.svg';
import typescript from '../assets/svg/skills/typescript.svg';
import mongoDB from '../assets/svg/skills/mongoDB.svg';
import git from '../assets/svg/skills/git.svg';
import materialui from '../assets/svg/skills/materialui.svg';
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg';


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'mongodb':
            return mongoDB;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'microsoft office':
            return microsoftoffice;
        default:
            break;
    }
};