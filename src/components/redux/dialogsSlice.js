import {createSlice} from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: [],
    reducers: {
        addMessage(state, action) {
            return [...state, action.payload]
        }
    }
})

export const {addMessage} = dialogsSlice.actions
export default dialogsSlice.reducer
