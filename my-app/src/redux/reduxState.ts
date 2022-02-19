import {combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { dialogsPageStateType, dispatchActionType, profilePageStateType, stateType } from "./state";

export type reducersType = {
    dialogsPage:(state: dialogsPageStateType, action: dispatchActionType) => dialogsPageStateType
    profilePage: (state:profilePageStateType, action:dispatchActionType) => profilePageStateType
}
export type storeType= (reducers: reducersCombineType)=> void;
export type reducersCombineType = ({}:reducersType)=> void
const reducers= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage: profileReducer
})

export type ReduxStoreType = typeof store;
export const store = createStore(reducers);