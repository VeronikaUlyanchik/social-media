import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import { setProfileUserAC } from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/reduxState';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import { Profile } from './Profile';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type APIUserType ={
    aboutMe: string
    contacts: {
        facebook: string
        website: null,
        vk: string
        twitter: string
        instagram: string
        youtube: null,
        github: string
        mainLink: null
    },
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName:string
    userId: number
    photos: {
        small:string
        large: string
    }
}
type MapStateToPropsType = {
    profile:APIUserType
};
export type mapDispatchToPropsType = {
    setProfileUserAC: ( profile:APIUserType) => void
};

export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfileUserAC(response.data)
        })
    }
    render() {
        return (
            <Profile state = {this.props.profile}/>
        )
    }
};

const mapStateToProps=(state:AppStateType)=> ({
    profile:state.profilePage.profile
})

export const ProfileContainerC = connect(mapStateToProps,{setProfileUserAC})(ProfileContainer)


