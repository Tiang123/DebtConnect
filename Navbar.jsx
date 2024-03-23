import React from "react";
import { Link } from "react-router-dom";

import DebtConnect from "../src/img/DebtConnect Logo.png"

export default function Navbar() {
    return (
        <div className="navbar-container">
            <img className="logo-icon" src={DebtConnect} alt="Logo"/>
            <div className="navbar-options" >
                <Link to="/" className="navbar-choice">Homepage</Link>
                <Link to="/consultation" className="navbar-choice">Consultation</Link>
                <Link to="/network" className="navbar-choice">Network</Link>
                <Link to="/profile" className="navbar-choice">Profile</Link>
            </div>
        </div>
    );
}

