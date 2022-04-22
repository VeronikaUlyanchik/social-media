import {userAPI} from "../api/api";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import {dispatchActionType, profilePageStateType} from "./state";
import {Dispatch} from "react";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const GET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';

let initialState = {
    postData: [
        {id: 1, message: "Hello", likes: 10},
        {id: 2, message: "How r u?", likes: 22},
        {id: 3, message: "Hi", likes: 12},
        {id: 4, message: "Yes", likes: 15},
    ],
    profile: null,
    status: '',
};

export const profileReducer = (state: profilePageStateType = initialState, action: dispatchActionType): profilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsDataType = {
                id: state.postData.length + 1,
                message: action.text,
                likes: 0,
            }
            return {...state, postData: [newPost, ...state.postData]};
        case SET_PROFILE_USER: {
            return {...state, profile: action.profile};
        }
        case GET_PROFILE_STATUS: {
            return {...state, status: action.status};
        }
        case UPDATE_PROFILE_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (text: string) => ({type: ADD_POST, text});
const setProfileUserAC = (profile: any) => ({type: SET_PROFILE_USER, profile});
const getProfileStatusAC = (status: any) => ({type: GET_PROFILE_STATUS, status});
const updateProfileStatusAC = (status: any) => ({type: UPDATE_PROFILE_STATUS, status});


export const getProfileUser = (userId: string) => (dispatch: Dispatch<ProfileActionsType>) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setProfileUserAC(response.data))
    })
};
export const getProfileStatus = (userId: string) => (dispatch: Dispatch<ProfileActionsType>) => {
    userAPI.getProfileStatus(userId).then(response => {
        dispatch(getProfileStatusAC(response.data))
    })
};
export const updateProfileStatus = (status: string) => (dispatch: Dispatch<ProfileActionsType>) => {
    userAPI.updateProfileStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(updateProfileStatusAC(status))
        }
    })
};

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setProfileUserAC>
    | ReturnType<typeof getProfileStatusAC>
    | ReturnType<typeof updateProfileStatusAC>