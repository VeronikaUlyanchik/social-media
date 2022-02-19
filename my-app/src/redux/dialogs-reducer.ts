import {dialogsPageStateType, dispatchActionType, messagesItemsProps, stateType} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_STATE = 'CHANGE_MESSAGE_STATE';

let initialState =  {
    dialogs: [
        {name: 'Egor', id: 1},
        {name: 'Vova', id: 2},
        {name: 'Igor', id: 3},
        {name: 'Olya', id: 4},
        {name: 'Lera', id: 5},
    ],
    messages: [
        {id: 1, message: "Hello",},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I like reading"},
        {id: 4, message: "What are you doing?"},
        {id: 5, message: "Please"},
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state: dialogsPageStateType = initialState, action: dispatchActionType):dialogsPageStateType => {
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