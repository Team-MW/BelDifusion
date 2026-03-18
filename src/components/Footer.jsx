import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer section">
            <div className="container footer-container">

                <div className="footer-brand">
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--text-primary)', lineHeight: 0.9 }}>
                        BELDI<br />
                        <span style={{ color: 'var(--primary-accent)' }}>FUSION.</span>
                    </h2>
                    <p className="footer-desc">
                        STREET FOOD MAROCAINE • SALADES XXL • BRUNCH DE GUEUF.<br />
                        LA CEPIÈRE / PATTE D'OIE.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <a href="#" className="social-icon">IG</a>
                        <a href="#" className="social-icon">TK</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                    <div className="info-block">
                        <h4>LE SPOT📍</h4>
                        <div>Avenue de la Patte d'Oie</div>
                        <div>31300 Toulouse, La Cepière</div>
                        <div style={{ color: 'var(--mint)', marginTop: '1rem', fontWeight: 'bold' }}>06 99 99 99 99</div>
                    </div>

                    <div className="info-block">
                        <h4>QUAND ? 🕒</h4>
                        <div>MAR - JEU : 11H - 22H</div>
                        <div>VEN - SAM : 11H - 23H</div>
                        <div style={{ color: 'var(--saffron)' }}>BRUNCH DIMANCHE : 10H - 16H</div>
                        <div style={{ textDecoration: 'line-through', opacity: 0.5 }}>LUNDI : DODO</div>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '5px solid var(--primary-accent)', paddingTop: '2rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                    © {new Date().getFullYear()} BELDI FUSION MA GUEULE.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
