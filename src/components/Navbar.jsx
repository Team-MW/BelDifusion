import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="navbar"
    >
      <div className="container nav-container">
        <a href="#" className="nav-logo" style={{ textDecoration: 'none' }}>
          <span className="logo-beldi">B/</span>
          <span className="logo-fusion">FUSION.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#menu" className="nav-link">CARTE</a></li>
          <li><a href="#brunch" className="nav-link">BRUNCH</a></li>
          <li><a href="#contact" className="nav-link">OÙ NOUS TROUVER</a></li>
        </ul>

        <a href="#contact" className="btn btn-primary nav-btn" style={{ fontSize: '1.2rem', padding: '0.5rem 1.5rem', transform: 'rotate(2deg)' }}>📞 ON MANGE OÙ ?</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
