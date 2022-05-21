import React from 'react';
import {appReducer, setInitializedSuccess } from './app-reducer';

const state = {
    initialized:false
}

it('initialized should be true', ()=> {
    let action = setInitializedSuccess()
    let newState = appReducer(state, action)
    expect(newState.initialized).toBe(true)
})
