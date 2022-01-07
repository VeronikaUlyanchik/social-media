import React from 'react';
import classes from './Post.module.css';

type propsPost = {
    message:string
    likes:number
}

export const Post = (props:propsPost) => {
    return (
        <div className={classes.item}>
            <img  className={classes.avatarMini} src="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png" alt="avatar"/>
            {props.message}
            <div>{props.likes} Likes </div>
        </div>
    )
}