import { connect } from 'react-redux';
import React from 'react';
import {AppStateType, reducersType} from '../../redux/reduxState';
import { followAC , setUsersAC, unfollowAC, UsersStateType, UserType } from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import { UsersC } from './UsersС';

type MapStateToPropsType  = {
    users: Array<UserType>
}
export type mapDispatchToPropsType  = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (state: Array<UserType>) => void
}

const mapStateToProps=(state: AppStateType): MapStateToPropsType=> {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps=(dispatch: Dispatch): mapDispatchToPropsType=> {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (state: Array<UserType>) => {
            dispatch(setUsersAC(state))
        }
    }
}

export type UsersPropsType = MapStateToPropsType &   mapDispatchToPropsType


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)
