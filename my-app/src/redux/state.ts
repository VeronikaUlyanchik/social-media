import {rerenderDomTree} from "../render";

type dialogsDataArrayType = {
    name: string
    id: number
};
export type messagesItemsProps = {
     message: string
     id?:number
 };
type postsDataType={
    id: number
    message:string
    likes:number
};
type profilePageStateType={
    postData: Array<postsDataType>
};
export type dialogsPageStateType={
    dialogs: Array<dialogsDataArrayType>
    messages:  Array<messagesItemsProps>
};
export type stateType={
    dialogsPage:dialogsPageStateType
    profilePage:profilePageStateType
};


export const state:stateType={
    dialogsPage:{
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
    ]},
    profilePage:{
    postData:[
        {id: 1, message:"Hello",  likes:10},
        {id: 2,message:"How r u?",  likes:22},
        {id: 3,message:"Hi",  likes:12},
        {id: 4,message:"Yes",  likes:15},
    ]},
};

export const addPost = (text:string) => {
    let newPost:postsDataType = {
        id: state.profilePage.postData.length+1,
        message: text,
        likes: 0,
    }
    state.profilePage.postData = [newPost, ...state.profilePage.postData]
    rerenderDomTree(state)
}

export const addMessage = (messageText:string)=>{
    let newMessage:messagesItemsProps= {
        id:state.dialogsPage.messages.length+1,
        message: messageText
    }
    state.dialogsPage.messages = [...state.dialogsPage.messages, newMessage]
    rerenderDomTree(state)
}