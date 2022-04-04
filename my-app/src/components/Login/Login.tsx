import {Field, Form, Formik} from 'formik';
import React from 'react';

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {
    return (
        <Formik
            initialValues={{login: '', password: '', rememberMe: false}}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}>
            {({isSubmitting}) => (
                <Form>
                    <div><Field placeholder="Login" name="login"/></div>
                    <div><Field type="password" name="password" placeholder="Password"/></div>
                    <div><Field type="checkbox" name="rememberMe"/> remember me</div>
                    <button type="submit"  disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}