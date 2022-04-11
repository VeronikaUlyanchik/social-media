import axios from "axios";
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
        return instance.get('auth/me').then(res => res.data)
    },
    login(formData: FormDataType) {
        debugger
        return instance.post<AuthResponseType>('auth/login', formData).then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login').then(res => res.data)
    },

};

export const followAPI = {
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    }
};

export const userAPI = {
    getUsers(currentPage=1, numberOnPage=10) {
        return instance.get(`users?page=${currentPage}&count=${numberOnPage}`).then(res => res.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },

};

type AuthResponseType = {
    resultCode: number
    messages: []
    data: {
        id: number
        email: string
        login: string
    }
}