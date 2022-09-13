import React from 'react';
import cl from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={cl.input} {...props}/>
    );
};

export default MyInput;


export const customInput = ({error, touched, status, ...props}) => {
    const style = error && touched || status ? [cl.input, cl.error].join(' ') : cl.input
    return <input className={style} {...props}/>
}
