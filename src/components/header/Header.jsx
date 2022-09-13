import React, {useContext} from 'react';
import cl from './Header.module.css'
import MyButton from "../UI/MyButton";
import {StatusContext} from "../assets/context/Context";
import {useDispatch} from "react-redux";
import {logoutUser} from "../redux/authSlice";

const Header = ({login}) => {
    const [id, auth] = useContext(StatusContext)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <div className={cl.header}>
            <div className={cl.logo}>SCN</div>
            {auth && <MyButton onClick={logout}>Выйти</MyButton>}
            <div style={{paddingRight: 15}}>{login}</div>
        </div>
    );
};

export default Header;