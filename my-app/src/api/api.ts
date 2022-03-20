import axios from "axios";

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
    }
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
};
