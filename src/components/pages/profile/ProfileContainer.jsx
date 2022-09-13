import React, {useContext, useEffect, useState} from 'react';
import {StatusContext} from "../../assets/context/Context";
import {useParams, useNavigate} from "react-router-dom";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfileInfoThunk, getStatusThunk, setStatusThunk} from "../../redux/profileSlice";

const ProfileContainer = (props) => {
    const profileFromRedux = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const [id, auth] = useContext(StatusContext)
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(profileFromRedux.status)
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

    useEffect(() => {
        if (!userId) return navigate('/login')
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
                     isFetching={profileFromRedux.isFetching}
                     profileData={profileFromRedux.profileInfo}
                     editMode={editMode}
                     text={text} setText={setText}
                     statusSetter={statusSetter}
                     setEditMode={setEditMode}
                     guestId={params.id}
            />

        </div>
    );
};

export default ProfileContainer;