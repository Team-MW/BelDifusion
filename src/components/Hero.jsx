import React from 'react';
import { motion } from 'framer-motion';
import dishImg from '../assets/salad.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', damping: 10, mass: 1 }}
                        className="hero-badge"
                    >
                        🔥 LA CEPIÈRE - PATTE D'OIE
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="hero-title"
                    >
                        <span className="line-1">BELDI</span>
                        <span className="line-2">FUSION</span>
                        <span className="line-3">MAROC.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="hero-description"
                    >
                        LE VRAI GOÛT DU MAROC MODE STREET. SALADES GOURMANDES, TAJINES QUI DÉCHIRENT ET BRUNCH ORIENTAL XXL.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <a href="#menu" className="btn btn-primary">VOIR LA CARTE 💥</a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
                    className="hero-image-wrapper"
                >
                    <img src={dishImg} alt="Street Food Marocaine" className="hero-img" />
                    <div className="badge-sticker">
                        100%<br />FRESH
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
