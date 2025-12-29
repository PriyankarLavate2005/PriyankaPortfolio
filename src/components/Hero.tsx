import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Database, Layout } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden',
            background: 'radial-gradient(circle at top right, rgba(79, 70, 229, 0.05), transparent), radial-gradient(circle at bottom left, rgba(6, 182, 212, 0.05), transparent)'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            Full Stack Developer & Cloud Enthusiast
                        </h2>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 800 }}>
                            Building <span className="gradient-text">Scalable</span> Digital <br /> Solutions for the Future
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                            Specializing in building high-performance web and mobile applications using modern technologies like React, Node.js, and Cloud infrastructures.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.1rem' }}>
                                View My Work <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn btn-outline" style={{ padding: '0.9rem 2rem', fontSize: '1.1rem' }}>
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                        className="hero-image"
                    >
                        <div style={{
                            width: '400px',
                            height: '400px',
                            background: 'var(--gradient-indigo)',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            opacity: 0.1,
                            position: 'absolute',
                            zIndex: -1,
                            animation: 'morph 10s linear infinite alternate'
                        }}></div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2rem'
                        }}>
                            {[
                                { icon: <Layout size={40} />, label: 'Frontend', color: '#4f46e5' },
                                { icon: <Database size={40} />, label: 'Backend', color: '#06b6d4' },
                                { icon: <Cloud size={40} />, label: 'Cloud', color: '#8b5cf6' },
                                { icon: <Layout size={40} />, label: 'Mobile', color: '#ec4899' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        padding: '2rem',
                                        background: 'white',
                                        borderRadius: '1rem',
                                        boxShadow: 'var(--shadow-lg)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        width: '160px'
                                    }}
                                >
                                    <div style={{ color: item.color }}>{item.icon}</div>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          100% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
        }
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
        @media (max-width: 991px) {
          .hero-image { margin-top: 3rem; }
        }
      `}} />
        </section>
    );
};

export default Hero;
