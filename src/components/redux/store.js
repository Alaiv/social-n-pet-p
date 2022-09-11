import {configureStore} from "@reduxjs/toolkit";
import postsReducer from './postsSlice'
import profileReducer from './profileSlice'
import dialogsReducer from './dialogsSlice'
import usersReducer from './usersSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        profile: profileReducer,
        dialogs: dialogsReducer,
        users: usersReducer,
        auth: authReducer
    }
})
