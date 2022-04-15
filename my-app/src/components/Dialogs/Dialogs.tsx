import React from 'react';
import classes from './Dialogs.module.scss';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {dialogsPageStateType} from "../../redux/state";
import {Navigate} from 'react-router-dom';
import {Field, Form, Formik } from 'formik';
import { validateMessage } from '../../utils/validate';


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

    // if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={classes.dialogsContent}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div>
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
            {({isSubmitting,errors, touched}) => (
                <Form >
                    <div><Field className={errors.message ? classes.textareaError : classes.textarea} component="textarea"  placeholder="Text your message" name="message" validate={validateMessage}/></div>
                    {errors.message && touched.message && <div className={classes.errorText}>{errors.message}</div>}
                    <button type="submit"  disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}