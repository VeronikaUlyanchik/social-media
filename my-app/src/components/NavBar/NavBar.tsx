import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavBar.module.css';


export const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.activeLink : classes.item}
                to="/profile">Profile</NavLink></div>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.activeLink : classes.item}
                to="/messages">Messages</NavLink></div>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.activeLink : classes.item} to="/news">News</NavLink>
            </div>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.activeLink : classes.item} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}><NavLink
                className={navData => navData.isActive ? classes.activeLink : classes.item}
                to="/settings">Settings</NavLink></div>
        </nav>
    )
}