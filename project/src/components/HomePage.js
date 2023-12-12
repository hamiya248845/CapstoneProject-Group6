import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import bgimg01 from './images/img.jpg';
import bgimg02 from './images/img.jpg';
import bgimg03 from './images/img.jpg';
import logo from "./images/logo.jpg";
import im1 from './images/img1.jpg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddParcel from './AddParcel';
import './AboutUs.css';

const Homepage = () => {
 const images = [
   bgimg01,
   bgimg02,
   bgimg03,
   // Add more image imports
 ];

 const dropdownItems = [
   { label: 'View Parcel', to: '/services' },
   { label: 'Track Parcel', to: '/trackParcel' },
   { label: 'Add Parcel', to: '/addParcel' },
 ];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
   }, 3000); // Change image every 3 seconds

   return () => {
     clearInterval(interval);
   };

 }, [images]);

 const [anchorEl, setAnchorEl] = useState(null);

 const handleServicesClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleServicesClose = () => {
   setAnchorEl(null);
 };

 return (
   <div>
   <nav>
  <div className="navbar-content">
    <div className="logo">
    <h2 className="company-name">DellivNow</h2>
      <img src={logo} alt="Logo" />
    </div>
    
  </div>
  <ul className="nav-links">
    <li><NavLink to="/">Home</NavLink></li>
    <li><a href="#about-us">About Us</a></li>
    <li><a href="#contact-us">Contact Us</a></li>
    <li><NavLink to="/login" className="login-button">Login</NavLink></li>
  </ul>
</nav>

     <main className="main" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
   
     <section className="track-parcel-section d-flex align-items-center justify-content-center">
       <div className="container">
         <div className="row">
           <div className="col-md-6">
             <h2>Track Parcel</h2>
             <div className="track-parcel-box">
               <input type="text" placeholder="Enter Booking ID" />
               <button className="btn btn-primary">Track</button>
             </div>
           </div>
           <div className="col-md-6">
             <p className="moving-text-content">
               <h1 className="styled-text">We are India's largest parcel delivering system</h1>
             </p>
           </div>
         </div>
       </div>
     </section>
       <div className="shopnow-container"></div>
     </main>
     
     <footer className="footer" id="about-us">
       <div className="about-us">
         <div class="flex-container">
           <div id="h2">
             <h3>About Our Parcel Service</h3>
             <img src={logo} alt="Logo" />
             <div class="paragraph">
               <p>Welcome to DellivNow, where excellence meets convenience in the world of parcel delivery. With a dedication to reliability and customer satisfaction, we've been transforming the way parcels are handled and delivered. Our commitment to excellence and cutting-edge technology sets us apart as a leader in the industry.</p>
             </div>
           </div>
           <div id="mission">
             <h3>Our Mission</h3>
             <img src={im1} alt="Logo" />
             <p>At DellivNow, our mission is to provide seamless, secure, and efficient parcel delivery services that exceed our customers' expectations. We understand the significance of your parcels and the emotions attached to them, which is why we've crafted a service that prioritizes their safe and timely delivery, every single time.</p>
           </div>
         </div>
         <div class="flex-container">
           <h3>Why Choose Us?</h3>
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">Reliability</h5>
               <p class="card-text">Our track record speaks for itself. We've established a reputation for being a trustworthy partner in delivering your parcels intact and on time.</p>
             </div>
           </div>
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">Efficiency</h5>
               <p class="card-text">With state-of-the-art logistics and smart delivery solutions, we ensure that your parcels are handled with the utmost care and efficiency from pickup to drop-off.</p>
             </div>
           </div>
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">Security</h5>
               <p class="card-text">We take the security of your parcels seriously. Our advanced tracking systems and secure packaging options give you peace of mind throughout the entire delivery process.</p>
             </div>
           </div>
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">Customer-Centric</h5>
               <p class="card-text">Our dedicated customer support team is here to assist you around the clock. We're here to address any queries, concerns, or special requirements you may have.</p>
             </div>
           </div>
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">Innovation</h5>
               <p class="card-text">Embracing technology allows us to provide innovative features like real-time tracking, delivery alerts, and a user-friendly online platform.</p>
             </div>
           </div>
         </div>
       </div>
       <div id="foot">
         <div className="footer-logo">
           <h3>DellivNow</h3>
         </div>
         <div className="footer-links">
           <ul></ul>
         </div>
         <div className="footer-contact">
           <h5 id="contact-us">Contact Us</h5>
           <p>Address: 123 Street, Trivandrum City, Kerala, India</p>
           <p>Email: info@dellivnow.com</p>
           <p>Phone: +1 (123) 456-7890</p>
         </div>
       </div>
       <div className="footer-bottom">
         <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
       </div>
     </footer>
   </div>
 );
};

export default Homepage;
