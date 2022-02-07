import React from 'react';
import { dispatchActionType } from '../../redux/state';
import {MyPosts, postsDataType} from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    postData: Array<postsDataType>
    addPost:(action: dispatchActionType) => void
    changePostState:(action: dispatchActionType) => void
}

export const Profile:React.FC<profilePropsType> =({postData, addPost,changePostState,...props})=>{
    return (
        <div>
            <ProfileInfo />
           <MyPosts postData={postData} addPost={addPost} changePostState={changePostState}/>
        </div>
    )
}