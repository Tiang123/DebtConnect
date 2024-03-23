import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Homepage } from "./homepage";
import Consultation from "./consultation"; 
import Network from "./network";
import Profile from "./profile";



function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : currentForm === "register" ? <Register onFormSwitch={toggleForm}/> : <Homepage />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/network" element={<Network connections={5}/>} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes for other pages */}
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;




