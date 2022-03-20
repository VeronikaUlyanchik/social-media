import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setProfileUserAC} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/reduxState';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Profile} from './Profile';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {
    useEffect
} from "react";

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
};
export type mapDispatchToPropsType = {
    setProfileUserAC: (profile: APIUserType) => void
};

export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsType;

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {

    let { userId } = useParams();

        useEffect(() => {
            if (!userId) {
                userId='2';
            }
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
                    withCredentials: true,
                }).then(response => {
                    props.setProfileUserAC(response.data)
                })
            }, [userId]
        )


        return (
            <Profile state={props.profile}/>
        )
    }
;

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,

})

export const ProfileContainerC = connect(mapStateToProps, {setProfileUserAC})(ProfileContainer)


