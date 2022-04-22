import React from 'react';
import { authAPI } from '../api/api';
import {Dispatch} from "react";
import {AuthActionsType, getUserAuthData } from './auth-reducer';
import { AppThunkType } from './reduxState';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitializedStateType = {
    initialized: boolean
}

const initialState: InitializedStateType = {
    initialized:false
}

export const appReducer = (state :InitializedStateType = initialState, action: setInitializedSuccesType ):InitializedStateType => {
        switch (action.type) {
            case INITIALIZED_SUCCESS:
                return {
                    ...state,
                    initialized:true
                }
            default:
                return state
        }
}

export type setInitializedSuccesType = ReturnType<typeof setInitializedSuccess>;

const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const getInitializedSuccess = ():AppThunkType => (dispatch)=>{
    let promise = dispatch(getUserAuthData())
        promise.then(()=> dispatch(setInitializedSuccess()))
}

export type AppReducerActionType = setInitializedSuccesType
