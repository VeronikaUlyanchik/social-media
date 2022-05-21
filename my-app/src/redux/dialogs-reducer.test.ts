import React from 'react';
import { addMessageActionCreator, dialogsReducer } from './dialogs-reducer';

let state = {
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
    ],
};

it('new message should be added, length should be 6', ()=> {
    let action = addMessageActionCreator('test')
    let newState = dialogsReducer(state, action)
    expect(newState.messages.length).toBe(6)
})

it('the last message should be test', ()=> {
    let action = addMessageActionCreator('test')
    let newState = dialogsReducer(state, action)
    expect(newState.messages[5].message).toBe('test')
})