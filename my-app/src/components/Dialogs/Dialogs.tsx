import React, { ChangeEvent } from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import { dialogsPageStateType, dispatchActionType} from "../../redux/state";
import {addMessageActionCreator, changeMessageStateActionCreator} from "../../redux/dialogs-reducer";


type dialogsPropsType={
    dialogsPageData:dialogsPageStateType
    addMessage: (action: dispatchActionType) => void
}

export const Dialogs:React.FC<dialogsPropsType> = ({dialogsPageData,addMessage,...props}) => {

    const textareaMessageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        if (textareaMessageRef.current) {
            addMessage(addMessageActionCreator())
            textareaMessageRef.current.value = '';
        }
    }
    const dialogsItems = dialogsPageData.dialogs.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = dialogsPageData.messages.map((m => <MessagesItems message={m.message}/>));
    const newMessageBody = dialogsPageData.newMessageBody;

    const onChangeMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        addMessage(changeMessageStateActionCreator(text))
    }
    return (
        <div className={classes.dialogsContent}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messagesItems}>
                {messageItems}
                <div>
                    <textarea value={newMessageBody}
                              onChange={onChangeMessage}
                              ref={textareaMessageRef}
                    placeholder={'Enter your message'}> </textarea> <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}