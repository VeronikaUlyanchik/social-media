import React from 'react';
import { AppStateType } from '../../redux/reduxState';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { APIUserType } from './ProfileContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    state?: APIUserType
}

export const Profile:React.FC<profilePropsType> =({state,...props})=>{
    return (
        <div>
            <ProfileInfo state={state}/>
           <MyPostsContainer />
        </div>
    )
}