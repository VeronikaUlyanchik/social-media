import { postsDataType } from "../components/Profile/MyPosts/MyPosts";
import {dispatchActionType, profilePageStateType } from "./state";

const ADD_POST = 'ADD_POST';
const CHANGE_POST_STATE = 'CHANGE_POST_STATE';


export const profileReducer = (state:profilePageStateType, action:dispatchActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsDataType = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: 0,
            }
            state.postData = [newPost, ...state.postData];
            state.newPostText = '';
            return state;
        case CHANGE_POST_STATE:
            state.newPostText = action.text
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>({type:ADD_POST});
export const changePostStateActionCreator = (text:string) =>({type:CHANGE_POST_STATE, text:text});