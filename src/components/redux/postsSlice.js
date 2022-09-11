import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost(state, action) {
            return [...state, action.payload]
        },
        deletePost(state, action) {
            return state.filter(p => p.id !== action.payload)
        }
    }
})

export const {addPost, deletePost} = postsSlice.actions
export default postsSlice.reducer
