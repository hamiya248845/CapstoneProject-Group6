import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import bgimg01 from './images/img.jpg';
import bgimg02 from './images/img.jpg';
import bgimg03 from './images/img.jpg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

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
    <div className="logo">
     <img src="logo.png" alt="Logo" />
    </div>
    <ul className="nav-links">
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="#">About Us</NavLink></li>
     <li><NavLink to="/register">Register</NavLink></li>
     <li>
       <Button aria-controls="services-menu" aria-haspopup="true" onClick={handleServicesClick}>
         Services
       </Button>
       <Menu
         id="services-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleServicesClose}
       >
         <MenuItem component={NavLink} to="/services">View Parcel</MenuItem>
         <MenuItem component={NavLink} to="/trackParcel">Track Parcel</MenuItem>
         <MenuItem component={NavLink} to="/addParcel">Add Parcel</MenuItem>
       </Menu>
     </li>
     <li><NavLink to="/login" className="login-button">Login</NavLink></li>
    </ul>
   </nav>
   <main className="main" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
    <div className="shopnow-container">
    </div>
   </main>
  </div>
 );
};

export default Homepage;
