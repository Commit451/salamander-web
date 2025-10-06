import React, {useState} from 'react';
import './Header.css';
import {useAuth} from '../../contexts/AuthContext';

interface HeaderProps {
    isSubpage?: boolean;
}

const Header: React.FC<HeaderProps> = ({isSubpage = false}) => {
    const {user} = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="app-header">
            <nav className="app-nav">
                <div className="nav-logo" onClick={() => window.location.hash = ''} style={{cursor: 'pointer'}}>
                    <img src="images/logo_salamander.png" alt="Salamander" className="logo-image"/>
                    <h1>Salamander</h1>
                </div>
                <button
                    className="hamburger-menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <button onClick={() => {
                        window.location.hash = 'learn-more';
                        setMobileMenuOpen(false);
                    }} className="nav-link nav-link-secondary">Get Started
                    </button>
                    <button onClick={() => {
                        window.location.hash = 'pricing';
                        setMobileMenuOpen(false);
                    }} className="nav-link">Pricing</button>
                    {user ? (
                        <button
                            className="nav-link"
                            onClick={() => {
                                window.location.hash = 'account';
                                setMobileMenuOpen(false);
                            }}
                            title={`${user.displayName || user.email} - View Account`}
                        >
                            Profile
                        </button>
                    ) : (
                        <>
                            <button onClick={() => {
                                window.location.hash = 'auth';
                                setMobileMenuOpen(false);
                            }} className="nav-link">Log In</button>
                            <button onClick={() => {
                                window.location.hash = 'auth';
                                setMobileMenuOpen(false);
                            }} className="nav-link nav-link-primary">Sign Up
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;