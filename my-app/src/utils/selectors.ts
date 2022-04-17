import { createSelector } from "reselect"
import { AppStateType } from "../redux/reduxState"


const getProfile = (state:AppStateType)=> {
    return state.profilePage.profile
}
export const getProfileSelector = createSelector(getProfile, (profile)=> {
    return profile
})
const getPostData = (state:AppStateType)=> {
    return state.profilePage.postData
}
export const getPostDataSelector = createSelector(getPostData, (postData)=> {
    return postData
})
const getStatus = (state:AppStateType)=> {
    return state.profilePage.status
}
export const getStatusSelector = createSelector(getStatus, (status)=> {
    return status
})
const getDialogsPage = (state:AppStateType)=> {
    return state.dialogsPage
}
export const getDialogsPageSelector = createSelector(getDialogsPage, (dialogsPage)=> {
    return dialogsPage
})

const getIsAuth = (state:AppStateType)=> {
    return state.auth.isAuth
}
export const getIsAuthSelector = createSelector(getIsAuth, (isAuth)=> {
    return isAuth
})

export const getUsersSelector = (state:AppStateType)=> {
    return state.usersPage.users
}
export const getCurrentPageSelector = (state:AppStateType)=> {
    return state.usersPage.currentPage
}
export const getNumberOnPageSelector = (state:AppStateType)=> {
    return state.usersPage.numberOnPage
}
export const getUsersCountSelector = (state:AppStateType)=> {
    return state.usersPage.usersCount
}
export const getIsFetchingSelector = (state:AppStateType)=> {
    return state.usersPage.isFetching
}
export const getUserInFollowingProcess = (state:AppStateType)=> {
    return state.usersPage.userInFollowingProcess
}

