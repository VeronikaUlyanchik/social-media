import React, { memo } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Navigate, useParams} from 'react-router-dom';
import {getProfileStatus, getProfileUser, updateProfileStatus} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/reduxState';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Profile} from './Profile';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {useEffect} from "react";
import {userAPI, UserProfileType} from '../../api/api';
import { WithAuthRedirectComponent } from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';
import { getProfileSelector, getStatusSelector } from '../../utils/selectors';


type MapStateToPropsType = {
    profile: UserProfileType
    status:string
};
export type mapDispatchToPropsType = {
    getProfileUser: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: string) => void
};

export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsType;

const ProfileContainer: React.FC<ProfilePropsType> = memo((props) => {
        const dispatch = useDispatch();
        const {id,isAuth} = useSelector((state:AppStateType)=>state.auth);
        let {userId} = useParams();
        useEffect(() => {
                if (!userId) {
                    userId = id ? id.toString() : '';
                }
                id && dispatch(getProfileUser(userId))
                props.getProfileStatus(userId)
        }, [userId])
        if (!isAuth) return <Navigate to={'/login'}/>
        return (
            <Profile state={props.profile} status={props.status} updateStatus={props.updateProfileStatus}/>
        )
    })
;

const mapStateToProps = (state: AppStateType) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
});

export const ProfileContainerC = compose(
    WithAuthRedirectComponent,
    connect(mapStateToProps, {getProfileUser, getProfileStatus, updateProfileStatus})
)(ProfileContainer);


