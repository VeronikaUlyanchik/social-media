import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.scss';

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={`${classes.header} ${classes.dd}`}>
            <div className={classes.headerInner}>
                <div className={classes.logo}>Social<span style={{color: '#ff516b' }}>Media</span></div>
               <div>{props.isAuth
                   ? props.login
                   : <NavLink to={'/login'}>Login</NavLink>}</div>
            </div>
        </header>
    )
}