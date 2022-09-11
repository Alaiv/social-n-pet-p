import React, {useEffect, useState} from 'react';
import {APIprovider} from "../../API/API";
import Users from "./Users";
import {mapHelper} from "../../assets/helpers/mapHelper";
import {useDispatch, useSelector} from "react-redux";
import {followThunk, getUsersThunk, setUsers, unfollowThunk} from "../../redux/usersSlice";

const UsersContainer = (props) => {
    const usersState = useSelector(state => state.users);
    const users = usersState.users
    const totalCount = usersState.totalCount;
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getUsersThunk([5, page]))
    }, [page])

    const updateFollow = (id, property) => {
        if(!property) {
            dispatch(unfollowThunk(id))
        } else {
            dispatch(followThunk(id))
        }
        dispatch(setUsers(mapHelper(users, 'id', id, {followed: property})));
    }

    return (
        <div>
            <Users {...props} users={users} totalCount={totalCount} setPage={setPage} updateFollow={updateFollow}
            />
        </div>
    );
};

export default UsersContainer;