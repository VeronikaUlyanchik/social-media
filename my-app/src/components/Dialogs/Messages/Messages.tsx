import React from 'react';
import classes from './../Dialogs.module.css';
import {messagesItemsProps} from "../../../redux/state";



export const MessagesItems: React.FC<messagesItemsProps> = (props) => {
    return <div className={classes.message}>{props.message}</div>
};




