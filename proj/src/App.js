import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Notfound from "./components/Notfound";
import Myhome from "./components/Myhome";
import About from "./components/About";
import Login from "./components/Products";
import FAQ from "./components/FAQ";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-dark">
        <ul className="nav justify-content-center  ">
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
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Myhome />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/faq" element={<FAQ/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;