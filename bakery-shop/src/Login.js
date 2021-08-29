import React, { useState } from "react";
import { Formik } from "formik";
import './App.css';
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup";
import { object } from 'yup';

const validationSchema = () => {
    return (
        object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })
    );
};

const OnSubmit = (values) => {
    const[submitData, setsubmitData] = useState();
    console.log('submitData', submitData);
    console.log('values', values);
}

const ValidationFOrm = () => (
    <Formik
        initialValues={{ email: "", password: "" }}
        // onSubmit={(values, { setSubmitting }) => {
        //     setTimeout(() => {
        //         console.log("Logging in", values);
        //         setSubmitting(false);
        //     }, 500);
        // }}
        onSubmit={OnSubmit}
        validationSchema={validationSchema}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                handleBlur,
                handleSubmit,
                handleChange,
            } = props;

            return (
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>
            );
        }}
    </Formik>
);


const Login = () => (
    <div className='relativeBlock'>
        <div className='popup'>
            <ValidationFOrm />
        </div>
    </div>
);

export default Login;