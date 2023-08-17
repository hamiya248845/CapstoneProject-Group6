import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import './Login.css';

import bgimg01 from './images/img.jpg';

import bgimg02 from './images/img.jpg';

import bgimg03 from './images/img.jpg';

const Login = () => {

 const images = [

    bgimg01,

    bgimg02,

    bgimg03,

  // Add more image imports

 ];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 useEffect(() => {

  const interval = setInterval(() => {

   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

  }, 3000); // Change image every 3 seconds

  return () => {

   clearInterval(interval);

  };

 }, []);

 const backgroundStyle = {

  backgroundImage: `url(${images[currentImageIndex]})`,

 };

 return (

  <div>

   <nav>

    <div className="logo">

     <img src="logo.png" alt="Logo" />

    </div>

    <ul className="nav-links">

     <li><Link to="/">Home</Link></li>

     <li><Link to="#">About Us</Link></li>

     <li><Link to="#">Contact Us</Link></li>

    </ul>

   </nav>

   <main className="main" style={backgroundStyle}>

    <div className="login-container">

     <h2>Login</h2>

     <Formik

      initialValues={{

       username: '',

       password: '',

      }}

      validationSchema={Yup.object({

       username: Yup.string().required('Required'),

       password: Yup.string().required('Required'),

      })}

      onSubmit={(values) => {

       // Handle login logic here

       console.log('Logging in with:', values);

      }}

     >

      <Form className="login-form">

       <div className="form-group">

        <label htmlFor="username">Username</label>

        <Field type="text" id="username" name="username" />

        <ErrorMessage name="username" component="div" className="error-message" />

       </div>

       <div className="form-group">

        <label htmlFor="password">Password</label>

        <Field type="password" id="password" name="password" />

        <ErrorMessage name="password" component="div" className="error-message" />

       </div>

       <button type="submit" className="login-button">Login</button>

      </Form>

     </Formik>

     <Link to="/register" className="register-link">

     New user? Register here

    </Link>

    </div>

   </main>

  </div>

 );

};

export default Login;
