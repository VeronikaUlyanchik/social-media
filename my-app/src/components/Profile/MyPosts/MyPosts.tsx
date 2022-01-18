import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export type postsDataType={
    message:string
    likes:number
}

type myPostPropsType={
    postData: Array<postsDataType>
}

export const MyPosts:React.FC<myPostPropsType> = (props) => {
    const postItems=props.postData.map((p)=><Post message={p.message} likes={p.likes}/>)
    return (
        <div className={classes.containerPosts}>
            <h3>My posts</h3>
            <div>
                new post
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postItems}
            </div>
        </div>
    )
}