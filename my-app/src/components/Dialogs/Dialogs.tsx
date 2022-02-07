import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {addMessageActionCreator, dialogsPageStateType, dispatchActionType} from "../../redux/state";


type dialogsPropsType={
    dialogsPageData:dialogsPageStateType
    addMessage: (action: dispatchActionType) => void
}

export const Dialogs:React.FC<dialogsPropsType> = ({dialogsPageData,addMessage,...props}) => {

    const textareaMessageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        if (textareaMessageRef.current) {
            addMessage(addMessageActionCreator(textareaMessageRef.current.value));
            textareaMessageRef.current.value = '';
        }
    }
    const dialogsItems = dialogsPageData.dialogs.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = dialogsPageData.messages.map((m => <MessagesItems message={m.message}/>));
    return (
        <div className={classes.dialogsContent}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messagesItems}>
                {messageItems}
                <div>
                    <textarea ref={textareaMessageRef}></textarea> <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}