import React, {useState} from 'react';
import cl from './Posts.module.css'
import MyButton from "../../../UI/MyButton";
import PostItem from "./PostItem/PostItem";
import MyArea from "../../../UI/MyArea/MyArea";
import {useDispatch, useSelector} from "react-redux";
import {addPost, deletePost} from "../../../redux/postsSlice";

const Posts = (props) => {
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
        <div className={cl.postarea}>
            <div className={cl.postcard}>
                <h2>Добавьте свой пост</h2>
                <div>
                    <MyArea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Введите описание поста...'>
                    </MyArea>
                </div>
                <MyButton onClick={() => dispatch(addPost(post))}
                >
                    Добавить пост
                </MyButton>
            </div>
            <div className={cl.list}>
                <h3>Список постов</h3>
                {postsFromRedux.map(post => <PostItem postDeleter={postDeleter}
                                             id={post.id} key={post.id}
                                             title='Это пост'
                                             description={post.text}
                                             likes={post.likes}
                />)
                }
            </div>
        </div>
    );
}

export default Posts;