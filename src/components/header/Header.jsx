import React from 'react';
import cl from './Header.module.css'

const Header = ({login}) => {
    return (
        <div className={cl.header}>
            <div className={cl.logo}>SCN</div>
            <div style={{paddingRight: 15}}>{login}</div>
        </div>
    );
};

export default Header;