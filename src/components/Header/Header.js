import React from 'react';
import './Header.css';
import logo from '../../views/Main/Img/google-meet-logo (1).png'; // Ensure the logo is in the public folder
import profileIcon from '../../views/Main/Img/IMG_20240511_221507_668.jpg'; // Ensure the profile icon is in the public folder

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
                <a href='http://localhost:3000/'><h4>uwc-ntrd-rnz</h4></a>
            </div>
            <div className="header-right">
                <div className="header-item">Time</div>
                <div className="header-item">Notifications</div>
                <div className="profile-icon">
                    <img src={profileIcon} alt="Profile" />
                </div>
            </div>
        </header>
    );
};

export default Header;