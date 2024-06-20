import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <button className="footer-button">Mute</button>
            <button className="footer-button">Video</button>
            <button className="footer-button end-call">End Call</button>
            <button className="footer-button">Share Screen</button>
            <button className="footer-button">More</button>
        </footer>
    );
};

export default Footer;