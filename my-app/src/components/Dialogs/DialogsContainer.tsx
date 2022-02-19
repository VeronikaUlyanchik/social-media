import React, { ChangeEvent } from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import { dialogsPageStateType, dispatchActionType} from "../../redux/state";
import {addMessageActionCreator, changeMessageStateActionCreator} from "../../redux/dialogs-reducer";
import { ReduxStoreType } from '../../redux/reduxState';
import { Dialogs } from './Dialogs';


type DialogsContainerPropsType={
    store: ReduxStoreType
}

export const DialogsContainer:React.FC<DialogsContainerPropsType> = ({store}) => {

    const sendMessage = () => {
            store.dispatch.bind(store)(addMessageActionCreator())
    }

    const onChangeMessage = (text:string) => {
        store.dispatch.bind(store)(changeMessageStateActionCreator(text))
    }
    return (
       <Dialogs dialogsPageData={store.getState().dialogsPage} addMessage={onChangeMessage} sendMessage={sendMessage}/>
    )
};