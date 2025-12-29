import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
                }`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.3s ease',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
                borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                    <Code2 size={32} />
                    <span className="gradient-text">Priyanka Lavate</span>
                </a>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2.5rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    style={{
                                        fontWeight: 600,
                                        color: 'var(--text-dark)',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-dark)',
                        display: 'block'
                    }}
                    className="mobile-toggle"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    zIndex: 99
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 600 }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 769px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}} />
        </header>
    );
};

export default Header;
