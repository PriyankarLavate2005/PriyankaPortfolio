import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{
            padding: '4rem 0 2rem',
            background: 'var(--text-dark)',
            color: 'white',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>
                        <span style={{ color: 'var(--primary-light)' }}>Dev</span>Portfolio
                    </h2>

                    <ul style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <li><a href="#about" style={{ fontSize: '0.9rem', opacity: 0.8 }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}>About</a></li>
                        <li><a href="#skills" style={{ fontSize: '0.9rem', opacity: 0.8 }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}>Skills</a></li>
                        <li><a href="#projects" style={{ fontSize: '0.9rem', opacity: 0.8 }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}>Projects</a></li>
                        <li><a href="#contact" style={{ fontSize: '0.9rem', opacity: 0.8 }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}>Contact</a></li>
                    </ul>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {[
                            { icon: <Github />, href: 'https://github.com/PriyankarLavate2005' },
                            { icon: <Linkedin />, href: 'www.linkedin.com/in/priyanka-lavate24' },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--primary)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '2rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        width: '100%',
                        opacity: 0.6,
                        fontSize: '0.85rem'
                    }}>
                        © {new Date().getFullYear()} priyankarlavate. All rights reserved.
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    color: 'white',
                    border: '4px solid white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-lg)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(-50%) translateY(0)')}
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;
