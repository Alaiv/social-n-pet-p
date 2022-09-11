import React from 'react';
import MyButton from "../../../../UI/MyButton";

const PostItem = ({title, description, likes, postDeleter, id}) => {
    return (
        <div style={{fontSize: 18}}>
            <h4>{title}</h4>
            <div><p>{description}</p></div>
            <div><span>Likes: {likes}</span></div>
            <MyButton onClick={() => postDeleter(id)}>Удалить пост</MyButton>
        </div>
    );
};

export default PostItem;