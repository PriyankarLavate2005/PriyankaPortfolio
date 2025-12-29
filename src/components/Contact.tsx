import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setIsSending(false);
                formRef.current?.reset();
                setTimeout(() => setIsSent(false), 5000);
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                }} className="contact-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Let's discuss your next project</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { icon: <Mail />, label: 'Email Me', value: 'priyankarlavate@gmail.com' },
                                { icon: <Phone />, label: 'Call Me', value: '+91 7559493556' },
                                { icon: <MapPin />, label: 'Location', value: 'Akluj,Maharashtra,India' }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--bg-light)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</h4>
                                        <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            padding: '3rem',
                            background: 'var(--bg-light)',
                            borderRadius: '2rem',
                            boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)'
                        }}
                    >
                        {!isSent ? (
                            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                                    <input type="text" name="from_name" placeholder="Your Name" required style={inputStyle} />
                                    <input type="email" name="from_email" placeholder="Your Email" required style={inputStyle} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                                    <input type="tel" name="phone_number" placeholder="Phone Number" style={inputStyle} />
                                    <input type="text" name="subject" placeholder="Subject" required style={inputStyle} />
                                </div>
                                <textarea name="message" placeholder="Your Message" rows={5} required style={inputStyle}></textarea>
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="btn btn-primary"
                                    style={{ justifyContent: 'center', width: '100%', opacity: isSending ? 0.7 : 1 }}
                                >
                                    {isSending ? 'Sending...' : 'Send Message'} <Send size={20} />
                                </button>
                            </form>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <CheckCircle size={60} color="#4f46e5" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="btn btn-outline"
                                    style={{ marginTop: '2rem' }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}} />
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(0,0,0,0.1)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Roboto, sans-serif'
};

export default Contact;
