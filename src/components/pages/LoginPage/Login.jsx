import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/authSlice";
import {Navigate} from "react-router-dom";
import {validateRequired} from "../../assets/validation/validate";
import {customInput} from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton";

const Login = () => {
    const authInfo = useSelector(state => state.auth)
    const dispatch = useDispatch()
    if (authInfo.isAuth) return <Navigate to='/profile'/>
    return (
        <div style={{display: "flex", flexDirection: "column", maxWidth: 300}}>
            <h1 style={{textAlign: "left"}}>Логин</h1>
            <Formik
                initialValues={{
                login: '',
                password: '',
                rememberMe: false
            }}
                onSubmit={(values, submitProps) => {
                        dispatch(loginUser([values, submitProps.setStatus]))
                    }}
            >
                {
                    ({errors, touched, isValidating, status}) => (
                        <Form>
                            <Field name='login'
                                   error={errors.login}
                                   touched={touched.login}
                                   status={status}
                                   validate={validateRequired}
                                   as={customInput}
                                   placeholder='Введите логин'
                            />
                            {errors.login && touched.login && <div style={{color: "red"}}>{errors.login}</div>
                                || status && <span style={{color: "red"}}>{status.error}</span>}
                            <Field
                                name='password'
                                type='password'
                                error={errors.login}
                                touched={touched.login}
                                as={customInput}
                                validate={validateRequired}
                                placeholder='Введите пароль'
                            />
                            {errors.password && touched.password && <div style={{color: "red"}}>{errors.password}</div>}
                            <div>Запомнить меня: <input type="checkbox"/></div>
                            <MyButton  type='submit'>Submit</MyButton>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

export default Login;