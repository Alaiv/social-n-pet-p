import React from 'react';
import cl from './Profile.module.css'
import Posts from "./posts/Posts";
import MyInput from "../../UI/MyInput/MyInput";

const Profile = ({profileData, editMode, text, setText, statusSetter, setEditMode}) => {
    return (
        <div className={cl.profile}>
            <div className={cl.userCard}>
                <div>
                    <img className={cl.ava} src="https://www.syl.ru/misc/i/ni/2/2/7/8/1/5/7/i/2278157.jpg"/>
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
            </div>
            <Posts/>
        </div>
    );
};

export default Profile;