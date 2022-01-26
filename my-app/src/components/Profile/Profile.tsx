import React from 'react';
import {MyPosts, postsDataType} from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type profilePropsType={
    postData: Array<postsDataType>
    addPost:(text: string) => void
}

export const Profile:React.FC<profilePropsType> =(props)=>{
    return (
        <div>
            <ProfileInfo />
           <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}