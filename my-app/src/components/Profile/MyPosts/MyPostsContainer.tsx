import React, { ChangeEvent, useState } from 'react';
import { dispatchActionType } from '../../../redux/state';
import { addPostActionCreator, changePostStateActionCreator } from '../../../redux/profile-reducer';
import {Post} from './Post/Post';
import { ReduxStoreType } from '../../../redux/reduxState';
import { MyPosts } from './MyPosts';



type myPostContainerPropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer: React.FC<myPostContainerPropsType> = ({store}) => {
    const addTask = () => {
                store.dispatch.bind(store)(addPostActionCreator());
    };

    const onPostChange = (text: string) => {
        if (text) {
            store.dispatch.bind(store)(changePostStateActionCreator(text))
        }
    };

    return (
      <MyPosts addPost={addTask} postData={store.getState().profilePage.postData} changePostState={onPostChange} newPostText={store.getState().profilePage.newPostText}/>
    )
};