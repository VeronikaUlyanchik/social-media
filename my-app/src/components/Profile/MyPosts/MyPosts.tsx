import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>my posts
            <div>
                new post
            </div>
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hello" likes={1000}/>
                <Post message="How r u?" likes={20}/>
            </div>
        </div>
    )
}