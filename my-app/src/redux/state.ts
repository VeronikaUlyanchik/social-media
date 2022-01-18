type dialogsDataArrayType = {
    name: string
    id: number
};
export type messagesItemsProps = {
     message: string
     id?:number
 };
type postsDataType={
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
        {message:"Hello",  likes:10},
        {message:"How r u?",  likes:22},
        {message:"Hi",  likes:12},
        {message:"Yes",  likes:15},
    ]},
}