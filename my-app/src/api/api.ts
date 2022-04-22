import axios, { AxiosResponse } from "axios";
import { FormDataType } from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '38b440c3-480d-4d4e-a2c9-675a400878f3'
    },
})


export const authAPI = {
    authMe() {
        return instance.get<any,AxiosResponse<ResponseType<AuthResponseType>>>('auth/me').then(res => res.data)
    },
    login(formData: FormDataType) {
        return instance.post<any, AxiosResponse<ResponseType<AuthResponseType>>, FormDataType>('auth/login', formData).then(res => res.data)
    },
    logout() {
        return instance.delete<any, AxiosResponse<ResponseType>>('auth/login').then(res => res.data)
    },

};

export const followAPI = {
    follow(userId: number) {
        return instance.post<any, AxiosResponse<ResponseType>>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<any, AxiosResponse<ResponseType>>(`follow/${userId}`).then(res => res.data)
    }
};

export const userAPI = {
    getUsers(currentPage=1, numberOnPage=10) {
        return instance.get<any, AxiosResponse<UsersResponseType>>(`users?page=${currentPage}&count=${numberOnPage}`).then(res => res.data)
    },
    getProfile(userId: string) {
        return instance.get<any, AxiosResponse<UserProfileType>>(`profile/${userId}`)
    },
    getProfileStatus(userId: string) {
        return instance.get<any, AxiosResponse<string>>(`profile/status/${userId}`)
    },
    updateProfileStatus(status: string) {
        return instance.put<any, AxiosResponse<ResponseType<{message: string}>>,string >(`profile/status/`, status)
    },
};

type ResponseType<T={}> ={
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: T
}

type AuthResponseType = {
        id: number
        email: string
        login: string
}

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    status: string | null
    followed: boolean,
    photos: { small: string, large: string }
}

export type UserProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: {small: string | null, large: string | null}
    userId: number
}