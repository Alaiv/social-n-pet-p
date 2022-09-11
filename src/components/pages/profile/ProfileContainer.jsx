import React from 'react';
import {useContext, useEffect, useState} from "react";
import {StatusContext} from "../../assets/context/Context";
import {useParams} from "react-router-dom";
import {APIprovider} from "../../API/API";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfileInfoThunk, getStatusThunk, setProfile, setStatus, setStatusThunk} from "../../redux/profileSlice";

const ProfileContainer = (props) => {
    const profileFromRedux = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const id = useContext(StatusContext)
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(profileFromRedux.status)
    const params = useParams()

    let userId = params.id
    if (params.id === null || params.id === undefined) {
        userId = id
    }

    const statusSetter = () => {
        dispatch(setStatusThunk(text))
        setEditMode(false)
    }

    useEffect(() => {
        if (userId) {
            dispatch(getProfileInfoThunk(userId))
            dispatch(getStatusThunk(userId))
        }
    }, [userId])

    useEffect(() => {
        setText(profileFromRedux.status)
    }, [profileFromRedux.status])

    return (
        <div>
            <Profile {...props}
                     profileData={profileFromRedux.profileInfo}
                     editMode={editMode}
                     text={text} setText={setText}
                     statusSetter={statusSetter}
                     setEditMode={setEditMode}/>
        </div>
    );
};

export default ProfileContainer;