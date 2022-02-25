import { dispatchActionType} from "./state";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserType = {
    id: number
    photo: string
    fullname: string
    status: string
    followed: boolean,
    location: { county: string, city: string }
}

export type UsersStateType = {
    users: Array<UserType>
}
let initialState:UsersStateType = {
    users: []
};

export const usersReducer = (state: UsersStateType = initialState, action: UserActionType): UsersStateType=> {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u=> u.id === action.userId ? {...u, followed: false} : u)};
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u=> u.id === action.userId ? {...u, followed: true} : u)};
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.state]};
        }
        default:
            return state
    }
}

export type UserActionType = FollowActionType | UnFollowActionType | setUsersActionType;

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export const setUsersAC = (state:Array<UserType>) => ({type: SET_USERS, state}) as const;