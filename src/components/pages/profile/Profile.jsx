import React, {useEffect} from 'react';
import cl from './Profile.module.css'
import Posts from "./posts/Posts";
import MyInput from "../../UI/MyInput/MyInput";
import {useDispatch} from "react-redux";
import {upPhoto} from "../../redux/profileSlice";

const Profile = ({profileData, editMode, text, setText, statusSetter, guestId, setEditMode, isFetching}) => {
    const dispatch = useDispatch()
    let photo;
    if(profileData.photos !== undefined) {
        photo = profileData.photos.large
    }

    const addAva = (e) => {
        if(e.target.files.length) {
            dispatch(upPhoto(e.target.files[0]))
        }
    }
    if(isFetching) return <h1>...LOADING...</h1>
    return (
        <div className={cl.profile}>
            <div className={cl.userCard}>
                <div>
                    <img className={cl.ava} src={photo || 'https://www.syl.ru/misc/i/ni/2/2/7/8/1/5/7/i/2278157.jpg'}/>
                </div>
                <div><b>Name: </b>{profileData.fullName}</div>
                <div>
                    {editMode
                        ? <MyInput value={text}
                                   onChange={(e) => setText(e.target.value)}
                                   onBlur={statusSetter}
                        />
                        : <span onDoubleClick={() => setEditMode(true)}><b>My status: </b><div>{text}</div></span>
                    }
                </div>
                {!guestId && <input type="file" onChange={addAva}/>}
            </div>
            <Posts/>
        </div>
    );
};

export default Profile;