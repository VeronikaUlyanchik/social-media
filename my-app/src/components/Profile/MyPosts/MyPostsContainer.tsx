import React, {ChangeEvent, useState} from 'react';
import {dispatchActionType, stateType} from '../../../redux/state';
import {addPostActionCreator, changePostStateActionCreator} from '../../../redux/profile-reducer';
import {Post} from './Post/Post';
import {AppStateType} from '../../../redux/reduxState';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';


type myPostContainerPropsType = {
    store?: AppStateType
}

let mapStateToProps = (state: stateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: dispatchActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePostState: (text: string) => {
            dispatch(changePostStateActionCreator(text))

        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)