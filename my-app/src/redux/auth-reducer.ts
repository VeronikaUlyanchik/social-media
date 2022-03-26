import React from 'react';
import { authAPI } from '../api/api';
import { dispatchActionType } from './state';

const SET_USER_AUTH = 'SET_USER_AUTH';

type AuthStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state :AuthStateType = initialState, action: setUserAuthACType ):AuthStateType => {
        switch (action.type) {
            case "SET_USER_AUTH":
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
            default:
                return state
        }
}

export type setUserAuthACType = ReturnType<typeof setUserAuthAC>;


const setUserAuthAC = (data: AuthStateType) => ({type: SET_USER_AUTH, data: data})
export const getUserAuthData = () => {
    return (dispatch: (action: dispatchActionType) => void) => {
        authAPI.authMe().then((res)=> {
            if (res.resultCode === 0) {
                dispatch(setUserAuthAC(res.data))
            }
        })
    }
}