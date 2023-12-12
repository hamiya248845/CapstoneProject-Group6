import React, { useState, useEffect } from 'react';
import './ViewParcel.css';
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const ViewParcel = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Declare anchorEl inside the component

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setAnchorEl(null);
  };

  const [parcelDetails, setParcelDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookingIdInput, setBookingIdInput] = useState('');

  const handleChange = (event) => {
    setBookingIdInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fetch parcel details based on the entered bookingId
    setLoading(true);
    fetch(`https://localhost:7022/api/Product/${bookingIdInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched parcel details
        setParcelDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h2 className="company-name">DellivNow</h2>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li>
            <NavLink
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleServicesClick}
            >
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
              {/* <MenuItem component={NavLink} to="/addParcel">Add Parcel</MenuItem> */}
            </Menu>
          </li>
          <li><NavLink to="/login" className="login-button">Login</NavLink></li>
        </ul>
      </nav>
      <div className="parcel">
        <h2>View Parcel</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="bookingId">Enter Booking ID:</label>
            <input
              type="text"
              id="bookingId"
              name="bookingId"
              value={bookingIdInput}
              onChange={handleChange}
            />
          </div>
          <button type="submit">View</button>
        </form>

        {loading && <p>Loading...</p>}

        {parcelDetails && (
          <div>
            <h3>Parcel Details</h3>
            <p>Booking ID: {parcelDetails.bookingId}</p>
            <p>Description: {parcelDetails.description}</p>
            <p>Weight (kg): {parcelDetails.weight}</p>
            <p>Delivery Address: {parcelDetails.deliveryAddress}</p>
            <p>Amount: {parcelDetails.amount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewParcel;
