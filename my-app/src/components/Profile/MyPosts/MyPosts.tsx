import {Field, Form, Formik } from 'formik';
import React from 'react';
import { validatePost } from '../../../utils/validate';
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
    return (
        <Formik
            initialValues={{post:''}}
            onSubmit={(values,{setSubmitting})=> {
                props.addPost(values.post)
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}>
            {({isSubmitting,errors,touched}) => (
                <Form>
                    <div className={errors.post ? classes.inputError : classes.postInput}><Field component="textarea"  name="post" validate={validatePost}/></div>
                    {errors.post && touched.post && <div className={classes.errorText}>{errors.post}</div>}
                    <button type="submit"  disabled={isSubmitting}>
                        Post
                    </button>
                </Form>
            )}
        </Formik>
    )
}