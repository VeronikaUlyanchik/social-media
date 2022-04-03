import { userAPI } from "../api/api";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import {dispatchActionType, profilePageStateType} from "./state";

const ADD_POST = 'ADD_POST';
const CHANGE_POST_STATE = 'CHANGE_POST_STATE';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    postData: [
        {id: 1, message: "Hello", likes: 10},
        {id: 2, message: "How r u?", likes: 22},
        {id: 3, message: "Hi", likes: 12},
        {id: 4, message: "Yes", likes: 15},
    ],
    newPostText: '',
    profile: null,
    status: '',
};

export const profileReducer = (state: profilePageStateType = initialState, action: dispatchActionType): profilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsDataType = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: 0,
            }
            return {...state, postData: [newPost, ...state.postData], newPostText: ''};
        case CHANGE_POST_STATE: {
            return {...state, newPostText: action.text};
        }
        case SET_PROFILE_USER: {
            return {...state, profile: action.profile};
        }
        case SET_PROFILE_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostStateActionCreator = (text: string) => ({type: CHANGE_POST_STATE, text});
const setProfileUserAC = (profile: any) => ({type:SET_PROFILE_USER, profile});
const setProfileStatusAC = (status: any) => ({type:SET_PROFILE_STATUS, status});
export const getProfileUser = (userId:string) => (dispatch: (action: dispatchActionType) => void) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setProfileUserAC(response.data))
    })
};
export const getProfileStatus = (userId:string) => (dispatch: (action: dispatchActionType) => void) => {
    userAPI.getProfileStatus(userId).then(response => {
        console.log(response)
        dispatch(setProfileStatusAC(response.data))
    })
};