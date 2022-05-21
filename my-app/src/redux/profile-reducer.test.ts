import React from 'react';
import { addPostActionCreator, deletePostAC, profileReducer, updateProfileStatusAC } from './profile-reducer';
let state = {
    postData: [
        {id: 1, message: "Hello", likes: 10},
        {id: 2, message: "How r u?", likes: 22},
        {id: 3, message: "Hi", likes: 12},
        {id: 4, message: "Yes", likes: 15},
    ],
    profile: null,
    status: '',
};

it('new post should be added', ()=> {
    let action = addPostActionCreator('test')
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(5)
})

it('first post should be test', ()=> {
    let action = addPostActionCreator('test')
    let newState = profileReducer(state, action)
    expect(newState.postData[0].message).toBe('test')
})

it('post should be deleted, length should be 3', ()=> {
    let action = deletePostAC(1)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(3)
})

it('post should not be deleted, length should be 4', ()=> {
    let action = deletePostAC(100)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(4)
})
