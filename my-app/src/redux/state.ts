let rerenderDomTree = (state: stateType) => {
    console.log('render')
}

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
type profilePageStateType = {
    postData: Array<postsDataType>
    newPostText: string
};
export type dialogsPageStateType = {
    dialogs: Array<dialogsDataArrayType>
    messages: Array<messagesItemsProps>
};
export type stateType = {
    dialogsPage: dialogsPageStateType
    profilePage: profilePageStateType
};

export type storeType= {
    _state: stateType
    // addPost: ()=> void
    // addMessage: (messageText:string)=>void
    // changePostState: (text:string)=> void
    observer: (subscriber: ((state: stateType) => void)) => void
    getState: ()=> stateType
    dispatch: (action: dispatchActionType) => void
}
export type dispatchActionType ={
    type: string
    [key: string] : string
}
const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_POST_STATE = 'CHANGE_POST_STATE';


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
            ]
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
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: postsDataType = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.postData = [newPost, ...this._state.profilePage.postData];
            rerenderDomTree(this._state)
        }
        else if(action.type === ADD_MESSAGE){
            let newMessage: messagesItemsProps = {
                id: this._state.dialogsPage.messages.length + 1,
                message: action.messageText
            }
            this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage]
            rerenderDomTree(this._state)
        }
        else if (action.type === CHANGE_POST_STATE){
            debugger
            this._state.profilePage.newPostText = action.text;
            rerenderDomTree(this._state);
        }
    },
    observer(subscriber: ((state: stateType) => void)) {
        rerenderDomTree = subscriber;
    }
}

export const addPostActionCreator = () =>({type:ADD_POST});
export const addMessageActionCreator = (messageText:string) =>({type:ADD_MESSAGE, messageText: messageText });
export const changePostStateActionCreator = (text:string) =>({type:CHANGE_POST_STATE, text:text});