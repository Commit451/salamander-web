import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#privacy">Privacy</a>
                    <a href="#terms">Terms</a>
                </div>
                <p>&copy; 2025 Commit 451</p>
            </div>
        </footer>
    );
};

export default Footer;