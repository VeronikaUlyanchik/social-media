import React from 'react';
import {Header} from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {AppStateType} from '../../redux/reduxState';
import axios from 'axios';
import {getUserAuthData} from '../../redux/auth-reducer';
import {authAPI} from '../../api/api';

export const HeaderContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserAuthData())
    }, [])
    const {isAuth, login, id} = useSelector((state: AppStateType) => state.auth)
    return <Header login={login} isAuth={isAuth}/>
}


