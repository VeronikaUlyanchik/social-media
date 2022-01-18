import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css';

type DialogsItemsProps = {
    name: string
    id: number
};

 export type dialogsDataArrayType = {
    name: string
    id: number
}

export const DialogsItems: React.FC<DialogsItemsProps> = (props) => {
    const path = "/messages/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
