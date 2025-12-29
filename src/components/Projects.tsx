import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'CloudSafe',
            description: 'A highly secure cloud storage solution that allows users to store data with end-to-end encryption.',
            tags: ['Next.js', 'TypeScript', 'MongoDB', 'AWS'],
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
            demo: 'https://cloud-safe-umb5.vercel.app/',
            github: 'https://github.com/PriyankarLavate2005/CloudSafe'
        },
        {
            title: 'Aqua Agri Link',
            description: 'working on innovative tool designed for farmers to manage water resources and monitor crop health in real-time.',
            tags: ['React', 'Node.js', 'IoT', 'Express'],
            image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/PriyankarLavate2005/AquaAgriLink',
            demo:'#'
        },
        {
            title: 'Crop Chain',
            description: 'A direct-to-consumer marketplace where farmers can sell their produce directly to customers at fair prices.',
            tags: ['React', 'Firebase', 'Tailwind', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/PriyankarLavate2005/CropChain',
            demo:'#'
        },
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'white',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    display: 'flex',
                                    gap: '0.5rem'
                                }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(255,255,255,0.9)',
                                            borderRadius: '2rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: 'var(--primary)',
                                            backdropFilter: 'blur(4px)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    {project.description}
                                </p>
                                <div style={{ marginTop: 'auto', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>
                                        Demo <ExternalLink size={18} />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.9rem' }}>
                                        Github <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button className="btn btn-primary">See More Projects</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
