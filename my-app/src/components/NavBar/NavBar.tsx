import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { AppStateType } from '../../redux/reduxState';
import classes from './NavBar.module.scss';
import {memo} from "react";


export const NavBar:React.FC = memo(() => {

    const {id} = useSelector((state:AppStateType)=>state.auth);
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.deactiveLink}
                to={`/profile/${id}`}>Profile</NavLink></div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.deactiveLink}
                to="/messages">Messages</NavLink></div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.deactiveLink} to="/news">News</NavLink>
            </div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.deactiveLink} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.deactiveLink}
                to="/settings">Settings</NavLink></div>
            <div className={classes.item}><NavLink
                className={({isActive})=>isActive ? classes.activeLink : classes.deactiveLink}
                to="/users">Users</NavLink></div>
        </nav>
    )
})