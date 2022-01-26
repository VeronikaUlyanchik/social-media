import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {rerenderDomTree} from "./render";

rerenderDomTree(state)
