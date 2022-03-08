import {connect} from 'react-redux';
import React from 'react';
import {AppStateType, reducersType} from '../../redux/reduxState';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersStateType,
    UserType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import s from './users.module.css';
import {Users} from './Users';


type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    numberOnPage: number
    usersCount: number
};
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (state: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsers: number) => void
};
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) {
    //     super(props)
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.numberOnPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    changeCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.numberOnPage}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users users={this.props.users} usersCount={this.props.usersCount} numberOnPage={this.props.numberOnPage}
                      currentPage={this.props.currentPage} changeCurrentPage={this.changeCurrentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        numberOnPage: state.usersPage.numberOnPage,
        usersCount: state.usersPage.usersCount
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
