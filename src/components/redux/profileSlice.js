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
    async (id, thunkAPI) => {
        const dispatch = thunkAPI.dispatch
        dispatch(setFetching(true))
        const response = await APIprovider.getUserProfile(id)
        return response.data;
    }
)

export const setStatusThunk = createAsyncThunk(
    'profile/setStatus',
    async (text) => {
        const response = await APIprovider.setStatus(text)
        if (response.resultCode === 0) {
            return response.data
        }
    }
)

export const upPhoto = createAsyncThunk(
    'profile/photo',
    async (file, thunkAPI) => {
        const dispatch = thunkAPI.dispatch
        const response = await APIprovider.uploadPhoto(file)
        dispatch(updatePhoto(response.data.data.photos))
    }
)


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileInfo: {},
        status: '',
        isFetching: false
    },
    reducers: {
        setStatus(state, action) {
            return {...state, status: action.payload}
        },
        setProfile(state, action) {
            return {...state, profileInfo: action.payload}
        },
        setFetching(state, action) {
            return {...state, isFetching: action.payload}
        },
        updatePhoto(state, action) {
            const file = action.payload
            return {...state, profileInfo: {...state.profileInfo, photos: file}}
        }
    },
    extraReducers: {
        [getStatusThunk.fulfilled]: (state, action) => {
            return {...state, status: action.payload}
        },
        [getProfileInfoThunk.fulfilled]: (state, action) => {
            return {...state, profileInfo: action.payload, isFetching: false}
        },
        [setStatusThunk.fulfilled]: (state, action) => {
            return {...state, profile: action.meta.arg}
        }
    }
})
export const {setStatus, setProfile, setFetching, updatePhoto} = profileSlice.actions
export default profileSlice.reducer
