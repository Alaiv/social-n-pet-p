import React from 'react';
import cl from "./Profile.module.css";
import MyButton from "../../UI/MyButton";

const FormInfo = ({contactsVals, profileData, editMode, setEditMode, guestId, ...props}) => {
    const contactsInfo = contactsVals.map((v) => <div key={Math.random()}><b>@ - </b>{v}</div>)
    return (
            <div className={cl.info}>
                <div><b>Name: </b>{profileData.fullName}</div>
                {<div><b>Name: </b>{profileData.lookingForAJob}</div> &&
                    <div><b>Name: </b>{profileData.lookingForAJobDescription}</div>}
                {contactsInfo}
                {!guestId && <MyButton onClick={() => setEditMode(true)}>Edit mode</MyButton>}
            </div>
    );
};

export default FormInfo;