import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { dialogsPageStateType, dispatchActionType, profilePageStateType, stateType } from "./state";
import {UserActionType, usersReducer, UsersStateType } from "./users-reducer";

export type reducersType = {
    dialogsPage:(state: dialogsPageStateType, action: dispatchActionType) => dialogsPageStateType
    profilePage: (state:profilePageStateType, action:dispatchActionType) => profilePageStateType
    usersPage: (state:UsersStateType, action:UserActionType) => UsersStateType
}
export type storeType= (reducers: reducersCombineType)=> void;
export type reducersCombineType = ({}:reducersType)=> void
const rootReducer= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));


// @ts-ignore
window.store = store;