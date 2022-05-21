import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { logout } from '../../redux/auth-reducer';
import classes from './Header.module.scss';

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = memo((props) => {
    const dispatch = useDispatch();

    const onLogoutClick=()=> {
        dispatch(logout())
    }

    return (
        <header className={`${classes.header} ${classes.dd}`}>
            <div className={classes.headerInner}>
                <div className={classes.logo}>Social<span style={{color: '#ff516b' }}>Media</span></div>
               <div>{props.isAuth
                   ? <><span>{props.login}</span> <button onClick={onLogoutClick}>Log Out</button></>
                   : <NavLink to={'/login'}>Login</NavLink>}</div>
            </div>
        </header>
    )
}) ;