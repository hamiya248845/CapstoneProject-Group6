import React from 'react';


import { BrowserRouter,Routes, Route } from 'react-router-dom';



import Login from './components/Login.js';



import './components/Homepage.css';
import Homepage from './components/HomePage.js';
import UserRegister from './components/UserRegister.js';

function App() {

 return (
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<Homepage />} />

   

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<UserRegister />} />
    

   </Routes>
   
   </BrowserRouter>

 );

}

export default App;
