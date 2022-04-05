import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { APIUserType } from './ProfileContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    state?: APIUserType
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