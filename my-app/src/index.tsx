import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export const dialogs= [
    {name: 'Egor', id: 1},
    {name: 'Vova', id: 2},
    {name: 'Igor', id: 3},
    {name: 'Olya', id: 4},
    {name: 'Lera', id: 5},
];

export const messages = [
    {id: 1, message: "Hello",},
    {id: 2, message: "How are you?"},
    {id: 3, message: "I like reading"},
    {id: 4, message: "What are you doing?"},
    {id: 5, message: "Please"},
];
export const postData =[
    {message:"Hello",  likes:10},
    {message:"How r u?",  likes:22},
    {message:"Hi",  likes:12},
    {message:"Yes",  likes:15},
];


ReactDOM.render(
    <App dialogsData={dialogs} messagesData={messages} postData={postData}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
