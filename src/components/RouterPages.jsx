import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileContainer from "./pages/profile/ProfileContainer";
import UsersContainer from "./pages/users/UsersContainer";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import Login from "./pages/LoginPage/Login";

const RouterPages = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/profile'/>}/>
            <Route path='/profile/' element={<ProfileContainer/>}>
                <Route path=':id' element={<ProfileContainer/>}/>
            </Route>
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/dialogs' element={<DialogsContainer/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/*' element={<h1>Page not found</h1>}/>
        </Routes>
    );
};

export default RouterPages;