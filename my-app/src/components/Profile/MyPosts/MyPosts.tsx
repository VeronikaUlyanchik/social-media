import React, { ChangeEvent, useState } from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';


export type postsDataType = {
    id: number
    message: string
    likes: number
}

type myPostPropsType = {
    postData: Array<postsDataType>
    addPost:() => void
    changePostState: (text: string) => void
    newPostText: string
}

export const MyPosts: React.FC<myPostPropsType> = (props) => {

    // let textareaRef = React.createRef<HTMLTextAreaElement>();
    const [postText, setPostText] = useState(props.newPostText);

    const addPost = () => {
        if (postText) {
            if (postText.trim()) {
                props.addPost();
                setPostText('');
            }
        }
    };

    const postItems = props.postData.map((p) => <Post message={p.message} likes={p.likes}/>);

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value)
        if (postText) {
            props.changePostState(postText)
        }
    };

    return (
        <div className={classes.containerPosts}>
            <h3>My posts</h3>
            <div>
                new post
            </div>
            <div>
                <div>
                    <textarea
                        value={postText}
                        // ref={textareaRef}
                        onChange={onPostChange}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postItems}
            </div>
        </div>
    )
};