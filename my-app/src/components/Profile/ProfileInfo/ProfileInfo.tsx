import React from 'react';
import classes from './ProfileInfo.module.css';

export const ProfileInfo:React.FC =()=>{
    return (
        <div>
            <img className={classes.background_img} src="https://cutewallpaper.org/21/cool-water-pics/Cool-Water-Background-61-images-.jpg"/>
            <div>ava+descr</div>
        </div>
    )
}