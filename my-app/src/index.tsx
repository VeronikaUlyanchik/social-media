import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";
import {rerenderDomTree} from "./render";

rerenderDomTree(state)
