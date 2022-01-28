import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css';

type DialogsItemsProps = {
    name: string
    id: number
};


export const DialogsItems: React.FC<DialogsItemsProps> = ({id, name, ...props}) => {
    const path = "/messages/" + id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}
