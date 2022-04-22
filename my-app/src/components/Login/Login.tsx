import {Field, Form, Formik, useFormik} from 'formik';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/reduxState';
import classes from './Login.module.scss';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const {isAuth, id} = useSelector((state: AppStateType) => state.auth)
    if (isAuth) {
        return <Navigate to={`/profile/${id}`}/>
    }
    return (
        <div className={classes.containerForm}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values, {setSubmitting, setStatus}) => {
            setTimeout(() => {
                dispatch(login(values, setStatus))
                setSubmitting(false);
            }, 400);
            formik.resetForm()
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Invalid email address. Password length must be 8 symbols or more ';
            }
            return errors
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input className={formik.errors.email ? classes.loginError : classes.loginInput}
                       placeholder="Login"
                       {...formik.getFieldProps('email')}/>
            </div>
            {formik.errors.email && formik.touched.email &&
                <div className={classes.errorText}>{formik.errors.email}</div>}
            <div>
                <input className={formik.errors.password ? classes.loginError : classes.loginInput}
                       placeholder="Password"
                       type="password"
                       {...formik.getFieldProps('password')}/>
            </div>
            <div>
                <input type="checkbox" {...formik.getFieldProps('rememberMe')}/>
                <label>Remember Me</label>
            </div>
            {formik.status && (<div className={classes.errorStatus}>{formik.status}</div>)}
            <button type="submit" disabled={formik.isSubmitting}>
                Send
            </button>
        </form>
    )
}