import React from 'react';
import { Header } from './Header';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import { AppStateType } from '../../redux/reduxState';
import axios from 'axios';
import { setUserAuthAC } from '../../redux/auth-reducer';

export const HeaderContainer = (props: any) => {

    const dispatch = useDispatch();
    const {isAuth , login , id} = useSelector((state:AppStateType)=>state.auth)

    useEffect(()=> {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true} ).then((response)=> {
            if (response.data.resultCode === 0) {
                dispatch(setUserAuthAC(response.data.data))
            }
        })
    },[])

    return <Header login={login} isAuth={isAuth}/>
}


