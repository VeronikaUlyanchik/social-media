import React from 'react';
import { AppStateType } from '../../redux/reduxState';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    store?: AppStateType
}

export const Profile:React.FC<profilePropsType> =({store,...props})=>{
    return (
        <div>
            <ProfileInfo />
           <MyPostsContainer           // store={store}
           />
        </div>
    )
}