import React from 'react';
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../redux/dialogsSlice";
import withAuth from "../../assets/hoc's/withAuth";

const DialogsContainer = () => {
    const dialogs = useSelector(state => state.dialogs)
    const dispatch = useDispatch()

    const setMessage = (message) => {
        dispatch(addMessage(message))
    }

    return (
        <Dialogs dialogs={dialogs} setMessage={setMessage}/>
    );
};

export default withAuth(DialogsContainer);