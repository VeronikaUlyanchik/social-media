import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { appReducer, AppReducerActionType } from "./app-reducer";
import {AuthActionsType, authReducer } from "./auth-reducer";
import {DialogsActionsType, dialogsReducer } from "./dialogs-reducer";
import {ProfileActionsType, profileReducer } from "./profile-reducer";
import { dialogsPageStateType, dispatchActionType, profilePageStateType, stateType } from "./state";
import { UsersActionsType, usersReducer, UsersStateType } from "./users-reducer";

export type reducersType = {
    dialogsPage:(state: dialogsPageStateType, action: DialogsActionsType) => dialogsPageStateType
    profilePage: (state:profilePageStateType, action:ProfileActionsType) => profilePageStateType
    usersPage: (state:UsersStateType, action:UsersActionsType) => UsersStateType
}
export type storeType= (reducers: reducersCombineType)=> void;
export type reducersCombineType = ({}:reducersType)=> void;

const rootReducer= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppActionsType =
    AppReducerActionType
| AuthActionsType
| DialogsActionsType
| ProfileActionsType
| UsersActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;