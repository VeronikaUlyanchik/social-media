import {Field, Form, Formik, useFormik } from 'formik';
import React from 'react';
import classes from './MyPosts.module.scss';
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

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 400);
            props.addPost(values.post)
            formik.resetForm()
        },
        validate: values => {
            const errors: { post?: string } = {};
            if (!values.post) {
                errors.post = 'Message can not be empty';
            }
            return errors
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><textarea className={formik.errors.post ? classes.inputError : classes.postInput}
                           placeholder="New post" name="post"
                           onChange={formik.handleChange}
                           value={formik.values.post}/></div>
            {formik.errors.post && <div className={classes.errorText}>{formik.errors.post}</div>}
            <button type="submit" disabled={formik.isSubmitting}>
                Send
            </button>
        </form>
    )
}