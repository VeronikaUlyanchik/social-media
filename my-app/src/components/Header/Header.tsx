import React from 'react';
import classes from './Header.module.css';



export const Header =()=>{
    return (
        <header className={`${classes.header} ${classes.dd}`}>
            <img src="https://www.logodesign.net/images/nature-logo.png"/>
        </header>
    )
}