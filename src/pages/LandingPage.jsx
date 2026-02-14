import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PharmacyElements from '../components/3d/PharmacyElements';
import ClientElements from '../components/3d/ClientElements';
import DataStream from '../components/animations/DataStream';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-3d">
            <Navbar />

            {/* Hero Section */}
            <div className="hero-section" id="home">
                {/* Background Particles */}
                <div className="particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`
                        }}></div>
                    ))}
                </div>

                {/* Left Side: Pharmacy */}
                <div className="split-side pharmacy-side">
                    <div className="content-wrapper">
                        <motion.div
                            className="text-content"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2>Pharmacy OS</h2>
                            <p>Intelligence for modern pharmacies.</p>
                            <Link to="/pharmacy" className="btn-3d btn-pharmacy">
                                Access Dashboard
                            </Link>
                        </motion.div>
                        <div className="visual-content">
                            <PharmacyElements />
                        </div>
                    </div>
                </div>

                {/* Right Side: Client */}
                <div className="split-side client-side">
                    <div className="content-wrapper">
                        <div className="visual-content">
                            <ClientElements />
                        </div>
                        <motion.div
                            className="text-content"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2>Patient App</h2>
                            <p>Your health, simplified.</p>
                            <Link to="/client" className="btn-3d btn-client">
                                Open App
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Center Bridge Overlay */}
                <div className="bridge-overlay">
                    <div className="logo-container">
                        <motion.h1
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            PharmaConnect
                        </motion.h1>
                        <DataStream />
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
