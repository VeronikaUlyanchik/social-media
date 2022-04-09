import {Field, Form, Formik} from 'formik';
import React from 'react';
import { validateLogin, validatePassword } from '../../utils/validate';
import classes from './Login.module.scss';

export const Login = () => {
    return (
        <div className={classes.containerForm}>
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
            {({isSubmitting, errors, touched}) => (
                <Form>
                    <div><Field className={errors.login ? classes.loginError : classes.loginInput} placeholder="Login"
                                name="login" validate={validateLogin}/>
                        {errors.login && touched.login && <div className={classes.errorText} >{errors.login}</div>}
                    </div>
                    <div><Field className={errors.password ? classes.loginError : classes.loginInput} type="password"
                                name="password" placeholder="Password" validate={validatePassword}/>
                        {errors.password && touched.password &&
                            <div className={classes.errorText}>{errors.password}</div>}</div>
                    <div><Field type="checkbox" name="rememberMe"/> remember me</div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}