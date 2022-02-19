import React from 'react';
import { ReduxStoreType } from '../../redux/reduxState';
import { dispatchActionType } from '../../redux/state';
import {MyPosts, postsDataType} from './MyPosts/MyPosts';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    store: ReduxStoreType
}

export const Profile:React.FC<profilePropsType> =({store,...props})=>{
    return (
        <div>
            <ProfileInfo />
           <MyPostsContainer store={store}/>
        </div>
    )
}