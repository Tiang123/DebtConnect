import React, {useState} from "react";
// import Community from "./components/Community";
// import Dashboard from "./components/Dashboard";
import Navbar from "./Navbar";
import SmallProfile from "./components/SmallProfile";
import Community from "./components/Community";
import News from "./components/News";
import Footer from './Footer';


export const Homepage = (props) => {
    return(
        <div className="homepage-main-container">
            <Navbar />
            <div className="homepage-container">
            {/* <Dashboard />
            <Community /> */}
                <SmallProfile />
                <Community />
                <News />
                
            </div>
           <Footer />
        </div>
        
    )
}