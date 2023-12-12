import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import bgimg01 from './images/img.jpg';
import bgimg02 from './images/img.jpg';
import bgimg03 from './images/img.jpg';
import logo from './images/logo.jpg';

const Login = () => {
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

  const navigate = useNavigate(); // Define the navigate function

  const handleSubmit = async (values) => {
    try {
      const requestData = {
        email: values.email,
        password: values.password,
      };
      
      const response = await fetch('https://localhost:44326/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      const responseData = await response.text();
  
      if (response.ok) {
        console.log('Login successful');
        console.log('JWT Token:', responseData);
        
        // Check if username and password match the condition
        if (values.email === 'admin@123' && values.password === 'admin@123') {
          navigate('/Afterlogin'); // Redirect to the "admin" component
        } else {
          navigate('/AfterLoginUser'); // Redirect to the "user" component
        }
      } else {
        const errorData = await response.json();
        console.log('Login failed');
        console.error('An error occurred during login:', errorData.message);
      }
    } catch (error) {
      console.log('Login failed');
      console.error('An error occurred during login:', error);
    }
  };
  

  return (
    <div>
      <nav>
        <div className="logo">
        <h2 className="company-name">DellivNow</h2>
          <img src={logo} alt="Logo" />
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
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().required('Required'),
              password: Yup.string().required('Required'),
            })}
            onSubmit={handleSubmit}
          >
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
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
