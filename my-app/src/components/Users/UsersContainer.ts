import { connect } from 'react-redux';
import React from 'react';
import {AppStateType, reducersType} from '../../redux/reduxState';
import { followAC , setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UsersStateType, UserType } from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import { UsersC } from './UsersС';

type MapStateToPropsType  = {
    users: Array<UserType>
    currentPage: number
    numberOnPage: number
    usersCount: number
}
export type mapDispatchToPropsType  = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (state: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsers: number) => void
}

const mapStateToProps=(state: AppStateType): MapStateToPropsType=> {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        numberOnPage: state.usersPage.numberOnPage,
        usersCount: state.usersPage.usersCount
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsers: number) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        },
    }
}

export type UsersPropsType = MapStateToPropsType &   mapDispatchToPropsType


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)
