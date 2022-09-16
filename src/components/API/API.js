import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2b0601d3-ce34-4fb8-840b-ba8921ccbb90'
    }
});

export class APIprovider {
    static async getUsers(limit, page) {
        const response = await instance.get(`users?count=${limit}&page=${page}`)
        return response.data
    }

    static async authMe() {
        const response = await instance.get('auth/me')
        return response
    }

    static async getStatus(userId) {
        const response = await instance.get('profile/status/' + userId)
        return response
    }

    static async setStatus(status) {
        const response = await instance.put('profile/status', {status: status})
        return response
    }

    static async getUserProfile(userId) {
        const response = await instance.get('profile/' + userId)
        return response
    }

    static async setFollow(userId) {
        const response = await instance.post('follow/' + userId)
        return response
    }

    static async setUnfollow(userId) {
        const response = await instance.delete('follow/' + userId)
        return response
    }

    static async loginUser({login, password, rememberMe = false, captcha = null}) {
        const response = await instance.post('auth/login/', {
            email: login,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        })
        return response
    }

    static async logout() {
        const response = await instance.delete('auth/login')
        return response
    }

    static async uploadPhoto(file) {
        let formData = new FormData()
        formData.append('image', file)
        const response = await instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    }

    static async uploadInfo(info) {
        const response = await instance.put('profile', {
            lookingForAJob: info.lookingForAJob,
            lookingForAJobDescription:info.lookingForAJobDescription ,
            fullName: info.fullName,
            aboutMe: info.aboutMe,
            contacts: {
                github: info.github,
                vk: info.vk,
                instagram: info.instagram,
                facebook: info.facebook,
                twitter: info.twitter,
                website: info.website,
                youtube: info.youtube,
                mainLink: info.mainLink
            }
        })
        return response.data
    }

    static async getCaptcha() {
        const response = await instance.get('security/get-captcha-url');
        return response.data;
    }
}