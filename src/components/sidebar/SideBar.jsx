import React from 'react';
import cl from './SideBar.module.css'
import {NavLink} from "react-router-dom";


const SideBar = () => {
    const activeClass = ({isActive}) =>
        isActive ? [cl.active, cl.item].join(' ') : cl.item

        return (
            <div className={cl.sidebar}>
                <NavLink className={activeClass} to='/profile'>Profile</NavLink>
                <NavLink className={activeClass} to='/users'>Users</NavLink>
                <NavLink className={activeClass} to='/dialogs'>Dialogs</NavLink>
            </div>
        );
    }


export default SideBar;