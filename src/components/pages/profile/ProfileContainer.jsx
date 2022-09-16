import React, {useContext, useEffect, useState} from 'react';
import {StatusContext} from "../../assets/context/Context";
import {useNavigate, useParams} from "react-router-dom";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfileInfoThunk, getStatusThunk, setStatusThunk, uploadUserInfo} from "../../redux/profileSlice";


const ProfileContainer = (props) => {
    const profileFromRedx = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const [id, auth] = useContext(StatusContext)
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(profileFromRedx.status)
    const params = useParams()
    const navigate = useNavigate()
    let userId = params.id
    if (params.id === null || params.id === undefined) {
        userId = id
    }

    const statusSetter = () => {
        dispatch(setStatusThunk(text))
        setEditMode(false)
    }

    const updateInfoOfProfile = (info) => {
        dispatch(uploadUserInfo(info))
    }

    useEffect(() => {
        if (!userId) return navigate('/login')
        if (userId) {
            dispatch(getProfileInfoThunk(userId))
            dispatch(getStatusThunk(userId))
        }
    }, [userId])

    useEffect(() => {
        setText(profileFromRedx.status)
    }, [profileFromRedx.status])

    return (
        <div>
            <Profile {...props}
                     isFetching={profileFromRedx.isFetching}
                     profileData={profileFromRedx.profileInfo}
                     editMode={editMode}
                     text={text} setText={setText}
                     statusSetter={statusSetter}
                     setEditMode={setEditMode}
                     guestId={params.id}
                     updateInfoOfProfile={updateInfoOfProfile}
                     dispatch={dispatch}
                     isUpdated={profileFromRedx.isUpdated}
                     id={id}
            />

        </div>
    );
};

export default ProfileContainer