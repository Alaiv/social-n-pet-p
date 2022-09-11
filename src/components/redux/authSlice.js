import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIprovider} from "../API/API";

export const authUser = createAsyncThunk(
    'auth/isAuth',
    async () => {
        const response = await APIprovider.authMe()
        return response.data
    }
)
export const loginUser = createAsyncThunk(
    'auth/isAuth',
    async (data) => {
        const response = await APIprovider.loginUser(data)
        return response.data
    }
)

const authSlice = createSlice({
    name: 'users',
    initialState: {
        login: '',
        id: null,
        isAuth: false
    },
    reducers: {},
    extraReducers: {

        [loginUser.fulfilled]: (state, action) => {
            return () => authUser()
        },
        [authUser.fulfilled]: (state, action) => {
            const info = action.payload.data
            if (action.payload.resultCode === 0) {
                return {...state, login: info.login, id: info.id, isAuth: true}
            }
        }
    }
})

export const {} = authSlice.actions
export default authSlice.reducer