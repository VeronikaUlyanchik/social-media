import React from 'react';
import { Header } from './Header';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import { AppStateType } from '../../redux/reduxState';
import axios from 'axios';
import { setUserAuthAC } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';

export const HeaderContainer = (props: any) => {

    const dispatch = useDispatch();
    const {isAuth , login , id} = useSelector((state:AppStateType)=>state.auth)

    useEffect(()=> {
        authAPI.authMe().then((res)=> {
            if (res.resultCode === 0) {
                dispatch(setUserAuthAC(res.data))
            }
        })
    },[])

    return <Header login={login} isAuth={isAuth}/>
}


