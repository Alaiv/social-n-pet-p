import React, {useEffect, useState} from 'react';
import cl from './User.module.css'
import {Link} from "react-router-dom";
import {APIprovider} from "../../../API/API";

const User = ({photos, name, followed, id, user, updateFollow}) => {

   //  const [userFollow, setUserFollow] = useState(user)
   // const followUnfollow = () => {
   //      if(userFollow.followed) {
   //          setUserFollow({...userFollow, followed: false})
   //      } else {
   //          setUserFollow({...userFollow, followed: true})
   //      }
   // }
   //
   // useEffect(() => {
   //     if(!userFollow.followed) {
   //         APIprovider.setUnfollow(id)
   //     } else {
   //         APIprovider.setFollow(id)
   //     }
   // }, [userFollow])

    let property = followed ? false : true
    return (
        <div>
            <Link to={`/profile/${id}`}>
                <img className={cl.ava} src={photos.small
                    || 'https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-59.jpg'}/>
            </Link>
            <div>{name}</div>
            <button onClick={ () => updateFollow(id, property)}>{followed ? 'Unfollow' : 'Follow'}</button>
        </div>
    )
}

export default User;