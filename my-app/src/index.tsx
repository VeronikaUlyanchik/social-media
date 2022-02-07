import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, stateType} from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

const rerenderDomTree = (state:stateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderDomTree(store.getState());

store.observer(rerenderDomTree);
