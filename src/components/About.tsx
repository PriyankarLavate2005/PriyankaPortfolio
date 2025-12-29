import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'var(--bg-light)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            border: '8px solid white',
                            aspectRatio: '1/1',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Experience badge */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-2rem',
                            right: '1rem',
                            background: 'white',
                            padding: '1.5rem 2rem',
                            borderRadius: '1rem',
                            boxShadow: 'var(--shadow-lg)',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>4+</div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Months of Experience</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>
                            Passionate About <span className="gradient-text">Cloud</span> & Code
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            I am a dedicated developer with a strong focus on building scalable web and mobile applications. My journey started with a fascination for how things work on the internet, which quickly evolved into a passion for modern full-stack development.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                            {[
                                { icon: <Cloud size={24} />, title: 'Cloud Infrastructure', desc: 'Expertise in AWS and Azure environments.' },
                                { icon: <Server size={24} />, title: 'Serverless architecture', desc: 'Building high-performance serverless apps.' },
                                { icon: <Shield size={24} />, title: 'Security First', desc: 'Ensuring your data is safe and encrypted.' },
                                { icon: <Zap size={24} />, title: 'Optimization', desc: 'Speed and performance-focused coding.' }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-outline">Read More About Me</button>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 992px) {
          .about-grid { grid-template-columns: 0.8fr 1.2fr !important; }
        }
      `}} />
        </section>
    );
};

export default About;
