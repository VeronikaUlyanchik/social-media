import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {dialogsPageStateType} from "../../redux/state";


type dialogsPropsType={
    dialogsPageData:dialogsPageStateType
}

export const Dialogs:React.FC<dialogsPropsType> = (props) => {
    const dialogsItems = props.dialogsPageData.dialogs.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = props.dialogsPageData.messages.map((m => <MessagesItems message={m.message}/>));
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