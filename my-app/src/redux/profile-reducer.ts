import { postsDataType } from "../components/Profile/MyPosts/MyPosts";
import {dispatchActionType, profilePageStateType } from "./state";

const ADD_POST = 'ADD_POST';
const CHANGE_POST_STATE = 'CHANGE_POST_STATE';

let initialState = {
    postData: [
        {id: 1, message: "Hello", likes: 10},
        {id: 2, message: "How r u?", likes: 22},
        {id: 3, message: "Hi", likes: 12},
        {id: 4, message: "Yes", likes: 15},
    ],
        newPostText: ''
};

export const profileReducer = (state:profilePageStateType = initialState, action:dispatchActionType):profilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsDataType = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: 0,
            }
            return {...state, postData: [newPost, ...state.postData], newPostText : ''};
        case CHANGE_POST_STATE: {
            return {...state, newPostText: action.text};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () =>({type:ADD_POST});
export const changePostStateActionCreator = (text:string) =>({type:CHANGE_POST_STATE, text:text});