import React, { memo , useCallback} from 'react';
import classes from './Dialogs.module.scss';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {dialogsPageStateType} from "../../redux/state";
import { useFormik} from 'formik';


type dialogsPropsType = {
    dialogsPageData: dialogsPageStateType
    addMessageActionCreator: (text: string) => void
    isAuth: boolean
}

export const Dialogs: React.FC<dialogsPropsType> = ({dialogsPageData, ...props}) => {

    const sendMessage = useCallback((text: string) => {
        props.addMessageActionCreator(text)
    },[])
    const dialogsItems = dialogsPageData.dialogs.map((d => <DialogsItems name={d.name} id={d.id}/>));
    const messageItems = dialogsPageData.messages.map((m => <MessagesItems message={m.message}/>));

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

const AddMessageForm = memo((props: AddMessageFormType) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 400);
            props.sendMessage(values.message)
            formik.resetForm()
        },
        validate: values => {
            const errors: { message?: string } = {};
            if (!values.message) {
                errors.message = 'Message can not be empty';
            }
            return errors
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><textarea className={formik.errors.message ? classes.textareaError : classes.textarea}
                        placeholder="Text your message" name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}/></div>
            {formik.errors.message && <div className={classes.errorText}>{formik.errors.message}</div>}
            <button type="submit" disabled={formik.isSubmitting}>
                Send
            </button>
        </form>
    )
})