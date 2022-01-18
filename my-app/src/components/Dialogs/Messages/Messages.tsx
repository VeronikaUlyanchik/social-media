import React from 'react';
import classes from './../Dialogs.module.css';


export type messagesItemsProps = {
    message: string
    id?:number
};

export const MessagesItems: React.FC<messagesItemsProps> = (props) => {
    return <div className={classes.message}>{props.message}</div>
};




