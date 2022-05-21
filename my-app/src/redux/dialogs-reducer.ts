import {dialogsPageStateType, dispatchActionType, messagesItemsProps} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE';


let initialState = {
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
};

export const dialogsReducer = (state: dialogsPageStateType = initialState, action: dispatchActionType): dialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messagesItemsProps = {
                id: state.messages.length + 1,
                message: action.text
            }
            return {...state, messages: [...state.messages, newMessage],};
        default:
            return state
    }
}

type AddMessageACType = ReturnType<typeof addMessageActionCreator>;

export const addMessageActionCreator = (text: string) => ({type: ADD_MESSAGE, text});

export type DialogsActionsType = AddMessageACType