import React from 'react';
import {addPostActionCreator, changePostStateActionCreator, dispatchActionType } from '../../../redux/state';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';


export type postsDataType = {
    message: string
    likes: number
}

type myPostPropsType = {
    postData: Array<postsDataType>
    addPost:(action: dispatchActionType) => void
    changePostState: (action: dispatchActionType) => void
}

export const MyPosts: React.FC<myPostPropsType> = (props) => {
    let textareaRef = React.createRef<HTMLTextAreaElement>();

    const addTask = () => {
        if (textareaRef.current) {
            if (textareaRef.current.value.trim()) {
                props.addPost(addPostActionCreator());
                textareaRef.current.value = '';
            }
        }
    };
    const postItems = props.postData.map((p) => <Post message={p.message} likes={p.likes}/>);
    const onPostChange = () => {
        debugger
        if (textareaRef.current) {
            props.changePostState(changePostStateActionCreator(textareaRef.current.value))
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
                    <textarea ref={textareaRef} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addTask}>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postItems}
            </div>
        </div>
    )
};