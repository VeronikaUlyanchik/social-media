import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {Navigate, useParams} from 'react-router-dom';
import {getProfileStatus, getProfileUser} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/reduxState';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Profile} from './Profile';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {
    useEffect
} from "react";
import {userAPI} from '../../api/api';
import { WithAuthRedirectComponent } from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';

export type APIUserType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}
type MapStateToPropsType = {
    profile: APIUserType
    status:string
};
export type mapDispatchToPropsType = {
    getProfileUser: (userId: string) => void
    getProfileStatus: (userId: string) => void
};

export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsType;

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {

        let {userId} = useParams();
        useEffect(() => {
            if (!userId) {
                userId = '2';
            }
            props.getProfileUser(userId)
            props.getProfileStatus(userId)
        }, [userId])
        return (
            <Profile state={props.profile} status={props.status}/>
        )
    }
;

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export const ProfileContainerC = compose(
    WithAuthRedirectComponent,
    connect(mapStateToProps, {getProfileUser, getProfileStatus})
)(ProfileContainer)


