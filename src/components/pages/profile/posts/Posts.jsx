import React from 'react';
import cl from './Posts.module.css'
import MyButton from "../../../UI/MyButton";
import PostItem from "./PostItem/PostItem";
import MyArea from "../../../UI/MyArea/MyArea";
import {addPost} from "../../../redux/postsSlice";

const Posts = ({post, postDeleter, postsFromRedux, text, setText, dispatch}) => {
    return (
            <div className={cl.list}>
                <h3>Список постов</h3>
                {postsFromRedux
                    .map(post => <PostItem postDeleter={postDeleter}
                                                      id={post.id} key={post.id}
                                                      title='Это пост'
                                                      description={post.text}
                                                      likes={post.likes}
                />)
                }
                <div>
                    <div>
                        <h2>Добавьте свой пост</h2>
                        <MyArea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='Введите описание поста...'>
                        </MyArea>
                    </div>
                    <MyButton onClick={() => dispatch(addPost(post))}>
                        Добавить пост
                    </MyButton>
                </div>
            </div>
    );
}

export default Posts;