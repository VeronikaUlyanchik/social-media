import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css';

export const Profile =()=>{
    return (
        <div className={classes.content}>
            <img src="https://cutewallpaper.org/21/cool-water-pics/Cool-Water-Background-61-images-.jpg"/>
            <div>ava+descr</div>
           <MyPosts />
        </div>
    )
}