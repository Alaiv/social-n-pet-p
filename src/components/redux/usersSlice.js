import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIprovider} from "../API/API";
import {getStatusThunk} from "./profileSlice";

export const getUsersThunk = createAsyncThunk(
    'users/getUsers',
    async (props) => {
        const [limit, page] = props;
        const data = APIprovider.getUsers(limit, page);
        return data;
    }
)

export const unfollowThunk = createAsyncThunk(
    'users/unfollow',
    async (id) => {
       await APIprovider.setUnfollow(id)
    }
)

export const followThunk = createAsyncThunk(
    'users/follow',
    async (id) => {
       await APIprovider.setFollow(id)
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        totalCount: null
    },
    reducers: {
        setUsers(state, action) {
            return {...state, users: [...action.payload]}
        }
    },
    extraReducers: {
        [getUsersThunk.fulfilled]: (state, action) => {
            return {...state, users: [...action.payload.items], totalCount: action.payload.totalCount}
        }
    }
})

export const {setUsers} = usersSlice.actions
export default usersSlice.reducer