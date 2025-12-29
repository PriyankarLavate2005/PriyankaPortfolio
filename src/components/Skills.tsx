import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Layers,
    Terminal,
    Settings,
    Globe,
    Smartphone,
    Database,
    Cpu,
    Cloud
} from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <Globe />, category: 'Frontend' },
        { name: 'Next.js', icon: <Layers />, category: 'Frontend' },
        { name: 'TypeScript', icon: <Code2 />, category: 'Language' },
        { name: 'Node.js', icon: <Terminal />, category: 'Backend' },
        { name: 'Express', icon: <Settings />, category: 'Backend' },
        { name: 'MongoDB', icon: <Database />, category: 'Database' },
        { name: "MySQL", icon: <Database />, category: "Database" },
        { name: 'Ionic', icon: <Smartphone />, category: 'Mobile' },
        { name: 'Capacitor', icon: <Cpu />, category: 'Mobile' },
        {name:'AWS',icon:<Cloud/>,category:'Cloud Computing'},
        {name:'Docker',icon:<Cloud/>,category:'Cloud Computing'}

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">My Technical <span className="gradient-text">Stack</span></h2>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-lg)' }}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(0,0,0,0.02)'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'rgba(79, 70, 229, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '0.5rem'
                            }}>
                                {React.cloneElement(skill.icon as React.ReactElement, { size: 30 })}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{skill.name}</h3>
                            <span style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-muted)',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {skill.category}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
