import React from 'react';
import {MyPosts, postsDataType} from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    postData: Array<postsDataType>
    addPost:() => void
    changePostState:(text: string) => void
}

export const Profile:React.FC<profilePropsType> =({postData, addPost,changePostState,...props})=>{
    return (
        <div>
            <ProfileInfo />
           <MyPosts postData={postData} addPost={addPost} changePostState={changePostState}/>
        </div>
    )
}