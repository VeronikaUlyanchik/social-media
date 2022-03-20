import {dispatchActionType} from "./state";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_F0LLOWING = 'TOGGLE_IS_F0LLOWING';


export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    status: string | null
    followed: boolean,
    photos: { small: string, large: string }
}
export type UsersStateType = {
    users: Array<UserType>
    currentPage: number
    numberOnPage: number
    usersCount: number
    isFetching: boolean
    userInFollowingProcess: number[]
}
let initialState: UsersStateType = {
    users: [],
    currentPage: 1,
    numberOnPage: 5,
    usersCount: 0,
    isFetching: false,
    userInFollowingProcess: []
};

export const usersReducer = (state: UsersStateType = initialState, action: UserActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        }
        case SET_USERS: {
            return {...state, users: action.state};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, usersCount: action.totalUsers};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case TOGGLE_IS_F0LLOWING: {
            return {
                ...state,
                userInFollowingProcess: action.isFetching
                    ? [...state.userInFollowingProcess, action.userId]
                    : state.userInFollowingProcess.filter(u => u !== action.userId)
            };
        }
        default:
            return state
    }
}


export type UserActionType =
    FollowActionType
    | UnFollowActionType
    | setUsersActionType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    |toggleIsFollowingProcessType;

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type toggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>
type toggleIsFollowingProcessType = ReturnType<typeof toggleIsFollowingProcessAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export const setUsersAC = (state: Array<UserType>) => ({type: SET_USERS, state}) as const;
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const;
export const setTotalUsersCountAC = (totalUsers: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsers}) as const;
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const;
export const toggleIsFollowingProcessAC = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_F0LLOWING, isFetching , userId}) as const;