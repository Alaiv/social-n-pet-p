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
    'auth/login',
    async (data, thunkAPI) => {
        const [values, setStatus] = data;
        const dispatch = thunkAPI.dispatch
        const response = await APIprovider.loginUser(values)
        if (response.data.resultCode === 0) {
            dispatch(authUser())
        } else {
            setStatus({error: response.data.messages[0]})
        }

    }
)
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        await APIprovider.logout()
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
        [logoutUser.fulfilled]: (state, action) => {
            return {...state, isAuth: false, id: null, login: ''}
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