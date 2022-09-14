import React from 'react';
import cl from './User.module.css'
import {Link} from "react-router-dom";

const User = ({photos, name, followed, id, user, updateFollow, followId}) => {
    let property = !followed
    return (
        <div>
            <Link to={`/profile/${id}`}>
                <img className={cl.ava} src={photos.small
                    || 'https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-59.jpg'}/>
            </Link>
            <div>{name}</div>
            <button disabled={followId.some(uId => uId === id)} onClick={ () => updateFollow(id, property)}>{followed ? 'Unfollow' : 'Follow'}</button>
        </div>
    )
}

export default User;