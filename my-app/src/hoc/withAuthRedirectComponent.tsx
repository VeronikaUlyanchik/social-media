import React from 'react';
import {connect} from 'react-redux';
import { Navigate } from "react-router-dom";
import {AppStateType} from "../redux/reduxState";
import { getIsAuthSelector } from '../utils/selectors';

const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: getIsAuthSelector(state)
});

export const WithAuthRedirectComponent = (Component:any) => {
    const AuthRedirectComponent:React.FC = (props: any)=> {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
    return ConnectedAuthRedirectComponent;
}