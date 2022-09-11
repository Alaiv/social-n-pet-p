import React from 'react';
import cl from './MyArea.module.css'

const MyArea = (props) => {
    return (
        <textarea {...props} className={cl.area}/>
    );
};

export default MyArea;