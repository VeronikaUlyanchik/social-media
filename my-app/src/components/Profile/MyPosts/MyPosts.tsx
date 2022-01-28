import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';


export type postsDataType={
    message:string
    likes:number
}

type myPostPropsType={
    postData: Array<postsDataType>
    addPost: ()=> void
    changePostState: (text:string)=> void
}

export const MyPosts:React.FC<myPostPropsType> = (props) => {
    let textareaRef= React.createRef<HTMLTextAreaElement>();

    const addTask = () => {
        if (textareaRef.current) {
            props.addPost();
            textareaRef.current.value = '';
        }
    }
    const postItems=props.postData.map((p)=><Post message={p.message} likes={p.likes}/>);
    const onPostChange = () => {
        if (textareaRef.current){
            props.changePostState(textareaRef.current.value)
        }
    }
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
}