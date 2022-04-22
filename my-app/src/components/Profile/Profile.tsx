import React from 'react';
import { UserProfileType } from '../../api/api';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    state?: UserProfileType
    status:string
    updateStatus: (status: string) => void
}

export const Profile:React.FC<profilePropsType> =({state,...props})=>{
    return (
        <div>
            <ProfileInfo state={state} status={props.status} updateStatus={props.updateStatus} />
           <MyPostsContainer />
        </div>
    )
}