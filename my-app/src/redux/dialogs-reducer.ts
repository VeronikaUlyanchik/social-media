import {dialogsPageStateType, dispatchActionType, messagesItemsProps} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_STATE = 'CHANGE_MESSAGE_STATE';

export const dialogsReducer = (state: dialogsPageStateType, action: dispatchActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messagesItemsProps = {
                id: state.messages.length + 1,
                message: state.newMessageBody
            }
            state.messages = [...state.messages, newMessage];
            state.newMessageBody = '';
            return state;
        case CHANGE_MESSAGE_STATE:
            state.newMessageBody = action.text;
            return state;
        default:
            return state
    }
}

export const addMessageActionCreator = () =>({type:ADD_MESSAGE});
export const changeMessageStateActionCreator = (text:string) =>({type:CHANGE_MESSAGE_STATE, text:text});