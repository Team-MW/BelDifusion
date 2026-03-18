import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
    { name: "ZAALOUK FIRE", price: "9.5€", desc: "Caviar d'aubergine fumé, tomates confites XXL, chips pita kiffantes." },
    { name: "BOWL BELDI 2.0", price: "14€", desc: "Le mix ultime: Quinoa, pois chiches rôtis, légumes de saison & sauce tahini." },
    { name: "TAJINE SUPRÊME", price: "16.5€", desc: "Poulet ultra-fondant, citrons confits, olives d'Agadir, pommes grenailles." },
    { name: "BAVETTE CHERMOULA", price: "18€", desc: "Boeuf grillé à la chermoula pimentée, purée patates douces de folie." },
    { name: "SWEET PASTILLA", price: "8€", desc: "L'incontournable crousti-fondant: brick, amandes torréfiées, fleur d'oranger." }
];

const Menu = () => {
    return (
        <>
            <div className="marquee-bar">
                MANGES BIEN, MANGES BELDI 🔥 SALADES 💥 TAJINES 🚀 BRUNCH OCCITAN ☄️ MANGES BIEN, MANGES BELDI 🔥 SALADES 💥 TAJINES 🚀 BRUNCH OCCITAN ☄️
            </div>
            <section id="menu" className="menu-section">

                <div className="container">
                    <div className="section-head">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="title display"
                        >
                            LA CARTE DE GUEUF
                        </motion.h2>
                    </div>

                    <div className="menu-grid">
                        {menuItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? 2 : -2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', delay: idx * 0.1 }}
                                className="menu-item"
                            >
                                <div className="menu-price">{item.price}</div>
                                <h3 className="menu-name">{item.name}</h3>
                                <p className="menu-desc">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                        <a href="#contact" className="btn btn-majorelle">COMMANDER MAINTENANT ⚡️</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
