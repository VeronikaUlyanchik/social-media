import React, { ChangeEvent, useState } from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import { dialogsPageStateType, dispatchActionType} from "../../redux/state";
import {addMessageActionCreator, changeMessageStateActionCreator} from "../../redux/dialogs-reducer";


type dialogsPropsType={
    dialogsPageData:dialogsPageStateType
    addMessage: (text:string) => void
    sendMessage: () => void

}

export const Dialogs:React.FC<dialogsPropsType> = ({dialogsPageData,addMessage,...props}) => {

    //const textareaMessageRef = React.createRef<HTMLTextAreaElement>();
    const [messageText, setMessageText] = useState(dialogsPageData.newMessageBody);

    const sendMessage = () => {
        if (dialogsPageData.newMessageBody) {
            props.sendMessage()
            setMessageText('');
        }
    }
    const dialogsItems = dialogsPageData.dialogs.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = dialogsPageData.messages.map((m => <MessagesItems message={m.message}/>));

    const onChangeMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
        let text = e.currentTarget.value
        addMessage(text)
    }
    return (
        <div className={classes.dialogsContent}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messagesItems}>
                {messageItems}
                <div>
                    <textarea value={messageText}
                              onChange={onChangeMessage}
                              // ref={textareaMessageRef}
                    placeholder={'Enter your message'}> </textarea> <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}