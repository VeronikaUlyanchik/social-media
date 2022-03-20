import {connect} from 'react-redux';
import React from 'react';
import {AppStateType, reducersType} from '../../redux/reduxState';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UsersStateType,
    UserType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import s from './users.module.css';
import {Users} from './Users';
import { Preloader } from '../Preloader/Preloader';
import { followAPI, userAPI } from '../../api/api';


type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    numberOnPage: number
    usersCount: number
    isFetching: boolean
};
export type mapDispatchToPropsType = {
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (state: Array<UserType>) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalUsersCountAC: (totalUsers: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
};
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) {
    //     super(props)
    // }


    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        userAPI.getUsers(this.props.currentPage,this.props.numberOnPage )
            .then(response => {
            this.props.setUsersAC(response.items)
            this.props.toggleIsFetchingAC(false)
            this.props.setTotalUsersCountAC(response.totalCount)
        })
    }

    changeCurrentPage = (page: number) => {
        this.props.toggleIsFetchingAC(true)
        this.props.setCurrentPageAC(page)
        userAPI.getUsers(page,this.props.numberOnPage ).then(response => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(response.data.items)
        })
    }
   follow = (userId: number) => {
       followAPI.follow(userId).then(response => {
           if (response.resultCode==0) {
               this.props.followAC(userId)
           }
       })
    }
    unfollow = (userId: number) => {
        followAPI.unfollow(userId).then(response => {
            if (response.resultCode==0) {
                this.props.unfollowAC(userId)
            }
        })
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} usersCount={this.props.usersCount} numberOnPage={this.props.numberOnPage}
                   currentPage={this.props.currentPage} changeCurrentPage={this.changeCurrentPage}
                   follow={this.follow}
                   unfollow={this.unfollow}/>
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
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
})(UsersAPIContainer)
