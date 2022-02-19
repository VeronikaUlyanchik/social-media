import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";



type dialogsDataArrayType = {
    name: string
    id: number
};
export type messagesItemsProps = {
    message: string
    id?: number
};
type postsDataType = {
    id: number
    message: string
    likes: number
};
export type profilePageStateType = {
    postData: Array<postsDataType>
    newPostText: string
};
export type dialogsPageStateType = {
    dialogs: Array<dialogsDataArrayType>
    messages: Array<messagesItemsProps>
    newMessageBody:string
};
export type stateType = {
    dialogsPage: dialogsPageStateType
    profilePage: profilePageStateType
};

export type storeType= {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    observer: (subscriber: ((state: stateType) => void)) => void
    getState: ()=> stateType
    dispatch: (action: dispatchActionType) => void
}
export type dispatchActionType ={
    type: string
    [key: string] : string
}


export const store:storeType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postData: [
                {id: 1, message: "Hello", likes: 10},
                {id: 2, message: "How r u?", likes: 22},
                {id: 3, message: "Hi", likes: 12},
                {id: 4, message: "Yes", likes: 15},
            ],
            newPostText: ''
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: stateType) {
        console.log('render')
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state)
    },
    observer(subscriber: ((state: stateType) => void)) {
        this._callSubscriber = subscriber;
    }
}

