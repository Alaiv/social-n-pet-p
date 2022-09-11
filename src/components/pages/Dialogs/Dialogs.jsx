import React, {useState} from 'react';
import cl from './Dialogs.module.css'
import MyButton from "../../UI/MyButton";
import MyArea from "../../UI/MyArea/MyArea";
import {useFormik} from "formik";
import MyInput from "../../UI/MyInput/MyInput";

const Dialogs = ({setMessage, dialogs, ...props}) => {
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit: values => {
            setMessage(values.message)
        }
    })

     const messageList = dialogs.map(msg => <div key={Math.random()}>{msg}</div>)

    return (
        <div className={cl.dialogs}>
            <ul className={cl.list}>
                <li>Some guy</li>
                <li>Some guy</li>
                <li>Some guy</li>
                <li>Some guy</li>
            </ul>
            <div>
                {messageList}
            </div>
            <form onSubmit={formik.handleSubmit}>
                <MyInput id='message' name='message' type='text' onChange={formik.handleChange} value={formik.values.message}></MyInput>
                <MyButton type='submit'>Отправить</MyButton>
            </form>
        </div>
    );
};

export default Dialogs;