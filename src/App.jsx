import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Brunch from './components/Brunch';
import Footer from './components/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Brunch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
