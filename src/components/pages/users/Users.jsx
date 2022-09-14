import React from 'react';
import User from "./user/User";
import Pagination from "../../assets/Pagination";

const Users = ({users, totalCount, setPage, updateFollow, followId}) => {

    const allUsers = users
        .map(user => <User
            key={user.id} id={user.id} photos={user.photos} name={user.name}
            followed={user.followed} followId={followId} user={user} updateFollow={updateFollow}
        />)

    return (
        <div>
            <Pagination totalCount={totalCount} setPage={setPage}/>
            {allUsers}
        </div>
    );
};

export default Users;