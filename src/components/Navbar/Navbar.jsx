import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Fade } from 'react-awesome-reveal';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import style from './Navbar.module.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

const Navbar = () => {
    const { theme, setHandleDrawer } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const styles = {
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '20em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
        },
        drawerItem: {
            width: '90%',
            height: '60px',
            padding: '0 30px',
            display: 'flex',
            margin: '2rem auto',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1rem',
            fontWeight: 600,
        },
        drawerIcon: {
            fontSize: '1.4rem',
        },
    };

    const shortname = (name) => {
        if (name.length > 15) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <IoMenuSharp
                    style={styles.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                style={styles.MuiDrawer}
                className={style.drawer}
                disableScrollLock={true}
            >
                <div className={style.div_closebtn}>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        style={styles.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className={style.navLink_container}>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={styles.drawerItem}>
                                    <IoHomeSharp
                                        style={styles.drawerIcon}
                                    />
                                    <span style={styles.drawerLinks}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={styles.drawerItem}>
                                    <FaUser style={styles.drawerIcon} />
                                    <span style={styles.drawerLinks}>
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#resume'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={styles.drawerItem}>
                                    <HiDocumentText
                                        style={styles.drawerIcon}
                                    />
                                    <span style={styles.drawerLinks}>
                                        Resume
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#services'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={styles.drawerItem}>
                                    <BsFillGearFill
                                        style={styles.drawerIcon}
                                    />
                                    <span style={styles.drawerLinks}>
                                        Services
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#blog'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={styles.drawerItem}>
                                    <FaFolderOpen
                                        style={styles.drawerIcon}
                                    />
                                    <span style={styles.drawerLinks}>
                                        Blog
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={styles.drawerItem}>
                                    <MdPhone style={styles.drawerIcon} />
                                    <span style={styles.drawerLinks}>
                                        Contact
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;