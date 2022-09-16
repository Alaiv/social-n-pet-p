import React from 'react';
import {Field, Form, Formik} from "formik";
import {uploadUserInfo} from "../../redux/profileSlice";
import cl from "./Profile.module.css";
import MyButton from "../../UI/MyButton";

const FormInput = ({contactsKeys, profileData, editMode, dispatch, setEditMode, isUpdated, id, ...props}) => {
    return (
        <div className={cl.info}>
            <Formik initialValues={{
                lookingForAJob: profileData.lookingForAJob,
                lookingForAJobDescription: profileData.lookingForAJobDescription,
                fullName: profileData.fullName,
                aboutMe: profileData.aboutMe,
                github: profileData.contacts.github,
                vk: profileData.contacts.vk,
                facebook: profileData.contacts.facebook,
                instagram: profileData.contacts.instagram,
                twitter: profileData.contacts.twitter,
                website: profileData.contacts.website,
                youtube: profileData.contacts.youtube,
                mainLink: profileData.contacts.mainLink,

            }
            } onSubmit={(values, submitProps) => {
                dispatch(uploadUserInfo([id, values, submitProps.setStatus]))
                if(isUpdated) {
                    setEditMode(false)
                }
            }}>
                {({errors, touched, isValidating, status}) => (
                    <Form>
                        <div><b>Ищете работу?</b><Field type="checkbox" name={'lookingForAJob'}/></div>
                        <div>
                            <b>Опишите ваш поиск: </b>
                            <Field type="text" name={'lookingForAJobDescription'}
                                   placeholder={'Описание вашего поиска'}/>
                        </div>
                        <div>
                            <b>Ваше полное имя: </b>
                            <Field type="text" name={'fullName'}
                                   placeholder={'Ваше имя'}/>
                        </div>
                        <div>
                            <b>Расскажите о себе: </b>
                            <Field type="text" name={'aboutMe'}
                                   placeholder={'О вас...'}/>
                        </div>
                        <div>
                            <h4>Contacts</h4>
                            {contactsKeys.map(v =>
                                <div key={v} >
                                    <Field name={v}placeholder={v + '...'}/>
                                </div>
                         )}
                            {status && <span style={{color: 'red'}}>{status.error}</span>}
                        </div>
                        <MyButton type='submit'>Отправить</MyButton>
                    </Form>
                )}
            </Formik>
            <MyButton onClick={() => setEditMode(false)}>Exit edit mode</MyButton>
        </div>
    );
};

export default FormInput;