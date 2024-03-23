import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer';
import Profileactivity from './components/Profileactivity';

import crccal from '../src/img/crccal.png';
import coumpound from '../src/img/coumpound.png';
import mortage from '../src/img/mortage.png';
import news1 from '../src/img/news1.png';
import news4  from '../src/img/news4.png';


const ProfilePage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <div className="profile-main-container">
        <Navbar />
      </div>
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img src={news1} alt="Credit Card Chart" style={{ width: '100vw', height: 'auto' }} />
        <img src={news4} alt="Round Image" style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>

      <div style={{ padding: '10px', textAlign: 'center', fontFamily: 'Arial' }}>
        <h3>Happy John</h3>
        <h5>Happy to free myself from housing loan and PTPTN. Please connect if you have same goal like me!</h5>
        <Link to="/network" className="navbar-choice" style={{ textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: '#0b64ad', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>5 connections</Link>

        <h3>Activity</h3>
      </div>
      <div className="homepage-container">
        <Profileactivity />
      </div>
      <h3>(click the buttons below, graph will be refined with backend, along with personal target features)</h3>
      <div className="profile-button-container">
        <button onClick={() => handleButtonClick('creditCard')} className="profile-button">Credit Card</button>
        <button onClick={() => handleButtonClick('compoundCalculator')} className="profile-button">Compound Calculator</button>
        <button onClick={() => handleButtonClick('housing')} className="profile-button">Housing</button>
      </div>

      {selectedButton === 'creditCard' && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <img src= {crccal} alt="Credit Card Chart" style={{ maxWidth: '60%' }} />
        </div>
      )}
      {selectedButton === 'compoundCalculator' && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <img src= {coumpound} alt="Credit Card Chart" style={{ maxWidth: '90%' }} />
          </div>
      )}
      {selectedButton === 'housing' && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <img src= {mortage} alt="Credit Card Chart" style={{ maxWidth: '80%' }} />
        </div>
      )}
  <Footer />
    </div>
  );
};

export default ProfilePage;
