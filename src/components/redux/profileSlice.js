import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIprovider} from "../API/API";

export const getStatusThunk = createAsyncThunk(
    'profile/fetchStatus',
    async (id) => {
        const response = await APIprovider.getStatus(id)
        return response.data;
    }
)

export const getProfileInfoThunk = createAsyncThunk(
    'profile/fetchProfile',
    async (id) => {
        const response = await APIprovider.getUserProfile(id)
        return response.data;
    }
)

export const setStatusThunk = createAsyncThunk(
    'profile/setStatus',
    async (text) => {
        const response = await APIprovider.setStatus(text)
        if(response.resultCode === 0) {
            return response.data
        }
    }
)


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileInfo: {},
        status: ''
    },
    reducers: {
        setStatus(state, action) {
            return {...state, status: action.payload}
        },
        setProfile(state, action) {
            return {...state, profile: action.payload}
        }
    },
    extraReducers: {
        [getStatusThunk.fulfilled]: (state, action) => {
            return {...state, status: action.payload}
        },
        [getProfileInfoThunk.fulfilled]: (state, action) => {
            return {...state, profileInfo: action.payload}
        },
        [setStatusThunk.fulfilled]: (state, action) => {
            return {...state, profile: action.meta.arg}
        }
    }
})
export const {setStatus, setProfile} = profileSlice.actions
export default profileSlice.reducer
