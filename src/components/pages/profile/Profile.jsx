import React, {useState} from 'react';
import cl from './Profile.module.css'
import Posts from "./posts/Posts";
import MyInput from "../../UI/MyInput/MyInput";
import {upPhoto} from "../../redux/profileSlice";
import FormInfo from "./formInfo";
import FormInput from "./formInput";

const Profile = ({
                     profileData, editMode, text, setText, isUpdated,
                     statusSetter, guestId, setEditMode, isFetching, dispatch
                 }) => {
    const [editProfileMode, setEditProfileMode] = useState(false)
    let photo;
    let contactsVals = [];
    let contactsKeys = []
    if (isFetching) return <h1>...LOADING...</h1>

    if (profileData.contacts !== undefined) {
        contactsKeys = Object.keys(profileData.contacts)
        contactsVals = Object.values(profileData.contacts)
    }

    if (profileData.photos !== undefined) {
        photo = profileData.photos.large
    }

    const addAva = (e) => {
        if (e.target.files.length) {
            dispatch(upPhoto(e.target.files[0]))
        }
    }


    return (
        <div className={cl.profile}>
            <div className={cl.userCard}>
                <div>
                    <img className={cl.ava} src={photo || 'https://www.syl.ru/misc/i/ni/2/2/7/8/1/5/7/i/2278157.jpg'}/>
                </div>
                {editProfileMode
                    ? <FormInput contactsKeys={contactsKeys} editMode={editProfileMode} isUpdated={isUpdated}
                                 profileData={profileData} dispatch={dispatch} setEditMode={setEditProfileMode}/>
                    : <FormInfo contactsVals={contactsVals} editMode={editProfileMode} guestId={guestId}
                                profileData={profileData} dispatch={dispatch} setEditMode={setEditProfileMode}/>}
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
