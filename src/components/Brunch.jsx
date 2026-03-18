import React from 'react';
import { motion } from 'framer-motion';
import brunchImg from '../assets/brunch.png';

const Brunch = () => {
    return (
        <section id="brunch" className="brunch-section">
            <div className="container brunch-container">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="brunch-image-wrapper"
                >
                    <img src={brunchImg} alt="Street Brunch Marocain" className="brunch-img" />
                </motion.div>

                <div className="brunch-content">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="brunch-title"
                    >
                        BRUNCH<br />MAROKI<br />XXL💥
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="brunch-description"
                    >
                        Chaque week-end, l'odeur du Khobz et Msemen envahit Patte d'Oie. Thés qui brûlent, omelettes cumin ultra-fat, dips de dingos.
                        On sert la pure dose de kif matinal. Arrives avec la dalle !
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <a href="#contact" className="btn btn-primary" style={{ transform: 'rotate(-2deg)' }}>
                            RÉSERVER UNE TABLE ⚡️
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Brunch;
