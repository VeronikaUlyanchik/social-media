import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { stateType} from "./redux/state";
import {store} from "./redux/reduxState";
import { BrowserRouter } from 'react-router-dom';

const rerenderDomTree = (state: stateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderDomTree(store.getState());

store.subscribe(()=>rerenderDomTree(store.getState()));
