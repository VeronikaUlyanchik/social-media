import {Field, Form, Formik } from 'formik';
import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';


export type postsDataType = {
    id: number
    message: string
    likes: number
}

type myPostPropsType = {
    postData: Array<postsDataType>
    addPostActionCreator:(text: string) => void
}

export const MyPosts: React.FC<myPostPropsType> = (props) => {

    const addPost = (text:string) => {
        props.addPostActionCreator(text);
    };

    const postItems = props.postData.map((p,i) => <Post key={i} message={p.message} likes={p.likes}/>);


    return (
        <div className={classes.containerPosts}>
            <h3>My posts</h3>
            <div>
                new post
            </div>
            <AddPostForm addPost={addPost} />
            <div className={classes.posts}>
                {postItems}
            </div>
        </div>
    )
};

const AddPostForm = (props:any) =>{
    return (
        <Formik
            initialValues={{post:''}}
            onSubmit={(values,{setSubmitting})=> {
                props.addPost(values.post)
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}>
            {({isSubmitting}) => (
                <Form>
                    <div><Field component="textarea"  name="post"/></div>
                    <button type="submit"  disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}