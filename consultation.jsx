import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import Consultantcard from "./components/Consultantcard";
import pfp6 from "./img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import pfp7 from "./img/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
import pfp8 from "./img/amy-hirschi-b3AYk8HKCl0-unsplash.jpg"
import pfp9 from "./img/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
import pfp10 from "./img/juan-encalada-WC7KIHo13Fc-unsplash.jpg"

export default function consultation(){
    return(
        <div className="consultation-main-container">
            <Navbar />
            <div className="consultation-container">
                <h2>Book Appointments</h2>
                <h2>Consultants</h2>
                <div className="consultation-card-container">
                    <Consultantcard 
                        img = {pfp6}
                        name = "Joseph Gonzalez"
                        specialities ="Financial Planner"
                    />
                    <Consultantcard 
                        img = {pfp7}
                        name = "Christina White"
                        specialities ="Debt Management"
                    />
                    <Consultantcard 
                        img = {pfp8}
                        name = "Amy Hirschi"
                        specialities ="Debt Counselor"
                    />
                    <Consultantcard 
                        img = {pfp9}
                        name = "Bob Wordsmith"
                        specialities ="Financial Consultant"
                    />
                    <Consultantcard 
                        img = {pfp10}
                        name = "Juan Encalada"
                        specialities ="Debt Management"
                    />
                </div>
                <div className="datentime">
                    <div>
                        <label htmlFor="date">Preferred Date</label>
                        <input className="spacedatentime" type="date" placeholder="Preferred date" id="date" name="date"/>
                    </div>
                    <div>
                        <label className="spacedatentime" htmlFor="time">Preferred Time</label>
                        <input className="spacedatentime" type="time" placeholder="Preferred time" id="time" name="time"/>
                    </div>
                </div>
                <input type="name" placeholder="Your name" id="email" name="name"/>
                <input type="email" placeholder="Your email" id="email" name="email"/>
                <input type="text" placeholder="Additional notes" id="notes" name="notes"/>
                <button>Confirm Appointment</button>
            </div>
            <Footer />
        </div>
    )
}