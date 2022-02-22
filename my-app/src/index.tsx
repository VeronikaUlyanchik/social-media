import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stateType} from "./redux/state";
import {store} from "./redux/reduxState";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );



