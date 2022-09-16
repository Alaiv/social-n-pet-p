import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePost} from "../../../redux/postsSlice";
import Posts from "./Posts";

const PostsContainer = (props) => {
    const [text, setText] = useState('')

    const postsFromRedux = useSelector(state => state.posts)
    const dispatch = useDispatch()

    let post = {
        id: Math.round(Math.random() * 100),
        text: text,
        likes: Math.round(Math.random() * 10)
    }

    const postDeleter = (id) => {
        dispatch(deletePost(id))
    }

    return (
        <>
            <Posts postDeleter={postDeleter} post={post} dispatch={dispatch}
                   postsFromRedux={postsFromRedux} text={text} setText={setText}
            />
        </>
    );
}

export default PostsContainer;