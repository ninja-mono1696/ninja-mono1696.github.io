import React, { useState, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './BackToTop.module.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    const style = {
        fontSize: '3rem',
        color: theme.tertiary,
    }

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className={styles.backToTop}
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle style={style} />
            </button>
        </div>
    );
}

export default BackToTop;