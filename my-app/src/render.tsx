import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, changePostState, stateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderDomTree = (state:stateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} changePostState={changePostState}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};



