import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import './UserRegister.css';

import bgimg01 from './images/img.jpg';

import bgimg02 from './images/img.jpg';

import bgimg03 from './images/img.jpg';

const UserRegister = () => {

 const images = [bgimg01, bgimg02, bgimg03];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 useEffect(() => {

  const interval = setInterval(() => {

   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

  }, 3000);

  return () => {

   clearInterval(interval);

  };

 }, []);

 const backgroundStyle = {

  backgroundImage: `url(${images[currentImageIndex]})`,

 };

 const initialValues = {

  username: '',

  password: '',

  confirmPassword: '',

 };

 const validationSchema = Yup.object({

  username: Yup.string().required('Required'),

  password: Yup.string().required('Required').min(8, 'Password is too short'),

  confirmPassword: Yup.string()

   .oneOf([Yup.ref('password'), null], 'Passwords must match')

   .required('Required'),

 });

 const handleSubmit = (values) => {

  // Handle registration logic here

  console.log('Registering user with:', values);

 };

 const navigate = useNavigate(); // Use useNavigate instead of useHistory

 return (

  <div className="register-container" style={backgroundStyle}>

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

   <div className="register-form">

    <h2>Register</h2>

    <Formik

     initialValues={initialValues}

     validationSchema={validationSchema}

     onSubmit={handleSubmit}

    >

     <Form>

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

      <div className="form-group">

       <label htmlFor="confirmPassword">Confirm Password</label>

       <Field type="password" id="confirmPassword" name="confirmPassword" />

       <ErrorMessage

        name="confirmPassword"

        component="div"

        className="error-message"

       />

      </div>

      <button type="submit" className="register-button">

       Register

      </button>

     </Form>

    </Formik>

    <Link

     to="/login"

     className="login-link"

     onClick={() => navigate('/login')}

    >

     Already have an account? Login here

    </Link>

   </div>

  </div>

 );

};

export default UserRegister;
