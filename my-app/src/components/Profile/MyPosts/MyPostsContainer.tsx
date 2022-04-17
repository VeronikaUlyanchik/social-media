import React, {ChangeEvent, useState} from 'react';
import {dispatchActionType} from '../../../redux/state';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {Post} from './Post/Post';
import {AppStateType} from '../../../redux/reduxState';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import { getPostDataSelector } from '../../../utils/selectors';


let mapStateToProps = (state: AppStateType) => {
    return {
        postData: getPostDataSelector(state),
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts)