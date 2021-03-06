import React from 'react';
import { authAPI } from '../api/api';
import {
    Dispatch
} from "react";
import { AppThunkType } from './reduxState';

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

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const authReducer = (state :AuthStateType = initialState, action: setUserAuthACType ):AuthStateType => {
        switch (action.type) {
            case "SET_USER_AUTH":
                return {
                    ...state,
                    ...action.payload,
                }
            default:
                return state
        }
}

export type setUserAuthACType = ReturnType<typeof setUserAuthAC>;

export const setUserAuthAC = (data: AuthStateType) => ({type: SET_USER_AUTH, payload: data});

export const getUserAuthData = () => (dispatch: Dispatch<AuthActionsType>):Promise<any> => {
       return authAPI.authMe()
           .then((res)=> {
            if (res.resultCode === 0) {
                let {id, email, login}= res.data
                dispatch(setUserAuthAC({id, email, login , isAuth:true}))
            }
        })
}

export const login = (formData: FormDataType, setStatus: (status?: any) => void):AppThunkType => {
    return (dispatch) => {
        authAPI.login(formData).then((res)=> {
            if (res.resultCode === 0) {
                dispatch(getUserAuthData())
            }
            else {
                setStatus(res.messages[0])
            }
        })
    }
}

export const logout = ():AppThunkType => {
    return (dispatch) => {
        authAPI.logout().then((res)=> {
            if (res.resultCode === 0) {
                dispatch(setUserAuthAC({id:null, email:null, login:null , isAuth:false}))
            }
        })
    }
}

export type AuthActionsType = setUserAuthACType;