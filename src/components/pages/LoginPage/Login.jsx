import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/authSlice";
import MyButton from "../../UI/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import {Navigate} from "react-router-dom";

const Login = () => {
    const authInfo = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const formik = useFormik({
            initialValues: {
                login: '',
                password: '',
                rememberMe: false
            },
            onSubmit: values => {
                console.log(values)
                dispatch(loginUser(values))
            }
        }
    )
    if(authInfo.isAuth) return <Navigate to='/profile'/>
    return (
        <div>
            <h1 style={{textAlign: "left"}}>Логин</h1>
            <form onSubmit={formik.handleSubmit}
                  style={{display: "flex", flexDirection: "column",
                      maxWidth: 300, justifyContent: "center"}}>
                <MyInput type="text" id='login' name='login' onChange={formik.handleChange}
                         value={formik.values.login} placeholder='введите логин'/>
                <MyInput type="password" id='password' name='password' onChange={formik.handleChange}
                         value={formik.values.password} placeholder='введите пароль'/>
                <div>Запомнить меня:
                    <input type="checkbox" id='rememberMe'
                           name='rememberMe' onChange={formik.handleChange}
                           value={formik.values.rememberMe}
                    />
                </div>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;