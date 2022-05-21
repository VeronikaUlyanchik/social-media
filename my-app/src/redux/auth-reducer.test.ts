import React from 'react';
import {authReducer, setUserAuthAC } from './auth-reducer';

const state = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

it('auth should be true', ()=> {
    let payload = {
        id: 45,
        login: 'gwha',
        email: 'gwha@gmail.com',
        isAuth: true
    }
    let action = setUserAuthAC(payload)
    let newState = authReducer(state, action)
    expect(newState.id).toBe(45)
    expect(newState.isAuth).toBe(true)
})