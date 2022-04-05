import React, {ChangeEvent, useState} from 'react';
import {dispatchActionType, stateType} from '../../../redux/state';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {Post} from './Post/Post';
import {AppStateType} from '../../../redux/reduxState';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state: stateType) => {
    return {
        postData: state.profilePage.postData,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts)