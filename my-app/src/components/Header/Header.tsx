import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={`${classes.header} ${classes.dd}`}>
            <img src="https://www.logodesign.net/images/nature-logo.png"/>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
                </header>
                )
            }