import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileBar from "./components/ProfileBar";
import Notfound from "./components/Notfound";
import Myhome from "./components/Myhome";
import About from "./components/About";
import Login from "./components/Login"; // Correct import path for Login component
import FAQ from "./components/FAQ";
import Services from "./components/Service";
import prof from "./prof.jpg";
import Register from "./components/Register";
import delv from "./img.jpg";




function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-dark">
        <ul className="nav justify-content-between align-items-center">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/FAQ">
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Services">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Register">
              Register
            </NavLink>
          </li>
         
          {/* Search input and button */}
          <li className="nav-item ml-auto" >
            <form  className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button> */}
            </form>
          </li>
       
          <li className="nav-item">
  <NavLink className="nav-link" to="/profilebar" id="profile">
  <img src={prof} alt="DellivNow" className="profile-img" />
  </NavLink>
</li>

        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Myhome />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register/>} />
          <Route path="profilebar" element={<ProfileBar/>}/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <div className="content-container">
  <div className="content">
    <div className="slider">
      <img src={delv} alt="Description of the image" />
    </div>
    {/* <div className="form-container">
      <div className="box">
        <form>
          <h1>Track your parcel</h1>
          <div className="input-container">
            <label htmlFor="bookingId">Booking ID</label>
            <input type="text" id="bookingId" placeholder="" />
          </div>
          <div className="submit-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div> */}
  </div>
</div>
        
    </div> 
  );
}

export default App;
