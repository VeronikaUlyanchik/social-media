import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavBar.module.css';


export const NavBar:React.FC = () => {
    return (
        <nav className={classes.nav}>
            {/*className в новом синтаксисе может принимать не только строку, но и функцию, а в функции в качестве аргумента объект, через деструктуризацию мы заберем из него isActive свойство*/}
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.item}
                to="/profile">Profile</NavLink></div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.item}
                to="/messages">Messages</NavLink></div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.item} to="/news">News</NavLink>
            </div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.item} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.item}
                to="/settings">Settings</NavLink></div>
        </nav>
    )
}