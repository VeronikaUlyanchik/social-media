import React from 'react';
import classes from './Dialogs.module.css';
import {dialogsDataArrayType, DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems, messagesItemsProps} from "./Messages/Messages";



type dialogsPropsType={
    dialogsData:Array<dialogsDataArrayType>
    messagesData:Array<messagesItemsProps>
}

export const Dialogs:React.FC<dialogsPropsType> = (props) => {
    const dialogsItems = props.dialogsData.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = props.messagesData.map((m => <MessagesItems message={m.message}/>));
    return (
        <div className={classes.dialogsContent}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messagesItems}>
                {messageItems}
            </div>
        </div>
    )
}