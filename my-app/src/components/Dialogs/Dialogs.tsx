import React, {ChangeEvent, useState} from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {dialogsPageStateType, dispatchActionType} from "../../redux/state";
import {Navigate} from 'react-router-dom';
import {Field, Form, Formik } from 'formik';


type dialogsPropsType = {
    dialogsPageData: dialogsPageStateType
    addMessageActionCreator: (text: string) => void
    isAuth: boolean
}

export const Dialogs: React.FC<dialogsPropsType> = ({dialogsPageData, ...props}) => {

    const sendMessage = (text: string) => {
            props.addMessageActionCreator(text)
    }
    const dialogsItems = dialogsPageData.dialogs.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = dialogsPageData.messages.map((m => <MessagesItems message={m.message}/>));

    if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={classes.dialogsContent}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messagesItems}>
                {messageItems}
                <div>
                    <AddMessageForm sendMessage={sendMessage}/>
                </div>
            </div>
        </div>
    )
};

type AddMessageFormType = {
    sendMessage: (text: string) => void
}

const AddMessageForm = (props:AddMessageFormType) =>{
    return (
        <Formik
            initialValues={{message:''}}
            onSubmit={(values,{setSubmitting})=> {
                props.sendMessage(values.message)
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}>
            {({isSubmitting}) => (
                <Form>
                    <div><Field component="textarea"  placeholder="Text your message" name="message"/></div>
                    <button type="submit"  disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}