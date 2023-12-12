import React, { useState } from 'react';
import './AddParcel.css';
import logo from "./images/logo.jpg";
import { Link, NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu'; // Import Menu from @mui/material
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem from @mui/material

// ... rest of your code


const AddParcel = () => {
  const [parcelDetails, setParcelDetails] = useState({
   
    description: '',
    weight: '',
    
    deliveryAddress: '',
    amount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParcelDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://localhost:7022/api/Product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parcelDetails),
      });

      console.log('API response status:', response.status);

      if (response.ok) {
        console.log('Parcel details submitted successfully:', parcelDetails);
      } else {
        console.error('Failed to submit parcel details');
      }
    } catch (error) {
      console.error('Error submitting parcel details:', error);
    }
  };

  return (
    <div>
      <nav>
    <div className="logo">
     <img src={logo} alt="Logo" />
    </div>
    <ul className="nav-links">
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/aboutUs">About Us</NavLink></li>
     <li><NavLink to="/register">Register</NavLink></li>
     <li>
       <NavLink aria-controls="services-menu" aria-haspopup="true" onClick={handleServicesClick}>
         Services
       </NavLink>
       <Menu
         id="services-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleServicesClose}
       >
         <MenuItem component={NavLink} to="/viewParcel">View Parcel</MenuItem>
         <MenuItem component={NavLink} to="/trackParcel">Track Parcel</MenuItem>
         <MenuItem component={NavLink} to="/addParcel">Add Parcel</MenuItem>
       </Menu>
     </li>
     <li><NavLink to="/login" className="login-button">Login</NavLink></li>
    </ul>
   </nav>

      <div className='parcel'>
        <h2>Add Parcel</h2>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={parcelDetails.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={parcelDetails.weight}
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <input
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              value={parcelDetails.deliveryAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={parcelDetails.amount}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit Parcel</button>
        </form>
      </div>
    </div>
  );
};

export default AddParcel;
