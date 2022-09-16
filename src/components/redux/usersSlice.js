import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIprovider} from "../API/API";

export const getUsersThunk = createAsyncThunk(
    'users/getUsers',
    async (props) => {
        const [limit, page] = props;
        const data = APIprovider.getUsers(limit, page);
        return data;
    }
)

export const followUnfollow = createAsyncThunk(
    'users/followUnfollow',
    async (data, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        const [id, type] = data;
        dispatch(setFollowId([true, id]))
        await APIprovider[type](id)
        dispatch(setFollowId([false, id]))
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        totalCount: null,
        isFetching: false,
        followId: []
    },
    reducers: {
        setUsers(state, action) {
            return {...state, users: [...action.payload]}
        },
        setFollowId(state, action) {
            const [isFetch, uid] = action.payload;
            return {
                ...state,
                    followId: isFetch
                        ? [...state.followId, uid]
                        : state.followId.filter(id => id !== uid)
            }
        }
    },
    extraReducers: {
        [getUsersThunk.fulfilled]: (state, action) => {
            return {...state, users: [...action.payload.items], totalCount: action.payload.totalCount}
        }
    }
})

export const {setUsers, setFollowId} = usersSlice.actions
export default usersSlice.reducer