import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

type DialogsItemsProps={
    name:string
    id:number
}

const DialogsItems = (props:DialogsItemsProps)=>{
    const path="/messages/" +props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type messagesItemsProps={
    message:string
}

const MessagesItems = (props:messagesItemsProps)=>{
    return <div className={classes.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogsContent}>
           <div className={classes.dialogsItems}>
               <DialogsItems name="Egor" id={1}/>
               <DialogsItems name="Vova" id={2}/>
               <DialogsItems name="Igor" id={3}/>
               <DialogsItems name="Olya" id={4}/>
               <DialogsItems name="Lera" id={5}/>
           </div>
            <div className={classes.messagesItems}>
                <MessagesItems message="Hello"/>
                <MessagesItems message="How are you?"/>
                <MessagesItems message="I like reading"/>
                <MessagesItems message="What are you doing?"/>
                <MessagesItems message="Please "/>
            </div>
        </div>
    )
}