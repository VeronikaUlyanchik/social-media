import {connect} from 'react-redux';
import React from 'react';
import {AppStateType, reducersType} from '../../redux/reduxState';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    toggleIsFollowingProcessAC,
    unfollowAC,
    UsersStateType,
    UserType,
    getUsers,
    follow,
    unfollow
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import s from './users.module.css';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';
import {followAPI, userAPI} from '../../api/api';
import { dispatchActionType } from '../../redux/state';


type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    numberOnPage: number
    usersCount: number
    isFetching: boolean
    userInFollowingProcess: number[]
};
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalUsersCountAC: (totalUsers: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
    getUsers: (currentPage: number,numberOnPage: number ) => void
};
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) {
    //     super(props)
    // }


    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.numberOnPage)
    }

    changeCurrentPage = (page: number) => {
        console.log(page)
        this.props.getUsers(page, this.props.numberOnPage)
    }
    follow = (userId: number) => {
        this.props.follow(userId);
    }
    unfollow = (userId: number) => {
        this.props.unfollow(userId);
    }

    render() {
        console.log(this.props.currentPage)
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} usersCount={this.props.usersCount} numberOnPage={this.props.numberOnPage}
                   currentPage={this.props.currentPage} changeCurrentPage={this.changeCurrentPage}
                   follow={this.follow}
                   unfollow={this.unfollow}
                   userInFollowingProcess={this.props.userInFollowingProcess}
            />
        </>
    }
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        numberOnPage: state.usersPage.numberOnPage,
        usersCount: state.usersPage.usersCount,
        isFetching: state.usersPage.isFetching,
        userInFollowingProcess: state.usersPage.userInFollowingProcess
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (state: Array<UserType>) => {
//             dispatch(setUsersAC(state))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsers: number) => {
//             dispatch(setTotalUsersCountAC(totalUsers))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }


export const UsersContainer = connect(mapStateToProps, {
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC,
    getUsers,
    follow,
    unfollow
})(UsersAPIContainer)
