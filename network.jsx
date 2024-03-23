import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import news4  from '../src/img/news4.png';


const Network = ({ connections }) => {
    const [sortBy, setSortBy] = useState('Sort by');
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>

            <div className="profile-main-container">
                <Navbar />
            </div>

            <div className="content-container">
                <div className="left-content">
                    <div className="connections-container">
                        <div className="connections-header">
                            <h3>{connections} Connections</h3>
                            <div className="sort-section">
                                <p>Sort by: </p>
                                <select className="form-select" value={sortBy} onChange={handleSortChange}>
                                    <option value="Recently Added">Recently Added</option>
                                    <option value="First Name">First Name</option>
                                    <option value="Last Name">Last Name</option>
                                    <option value="Expertise">Expertise</option>
                                </select>
                                <div className="search-section">
                                    <input type="text" placeholder="Search by name" />
                                    <i className="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div className="connections-list">
                            <ul>
                                {Array.from({ length: connections }, (_, index) => (
                                    <React.Fragment key={index}>
                                        <li>
                                            <div className="profile-image">
                                                <img src={news4} alt="Profile" />
                                            </div>
                                            <div className="profile-info">
                                                <p>John {index + 1}</p>
                                                <h4>Experience</h4>
                                                <h4>Interested In</h4>
                                            </div>
                                            <button className="custom-button" style={{ marginLeft: 'auto' }}>Message</button>

                                        </li>
                                        {index < connections - 1 && <hr />}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="right-content">
                    <div className="advertisement-container">
                        <div className="advertisement-content">
                            <h3>Advertisement</h3>
                            <p>This is a fake advertisement.</p>
                        </div>

                    </div>

                    <div className="chat-bar" onClick={toggleChat}>
                        {isChatOpen ? 'Close Chat' : 'Open Chat'}
                    </div>
                    {/* Chat Component (to be displayed when chat is open) */}
                    {isChatOpen && (
                        <div className="chat-component">
                            <h3>Chat Users</h3>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Network;
