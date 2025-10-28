import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    setAnimate(true);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const mobileStyles = {
    content: {
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    textBlock: {
      maxWidth: '100%',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '2rem',
    },
    heading: { order: 1 },
    photoBlock: {
      order: 2,
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
    description: { order: 3, marginTop: '1rem' },
    stats: {
      order: 4,
      marginTop: '1rem',
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    buttons: {
      order: 5,
      marginTop: '1rem',
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    },
  };

  const desktopStyles = {
    content: {
      justifyContent: 'center', // ✅ centrado en desktop también
    },
    textBlock: {},
    heading: {},
    photoBlock: {},
    description: {},
    stats: {},
    buttons: {},
  };

  const responsive = isMobile ? mobileStyles : desktopStyles;

  const fadeInUp = (delay: string): React.CSSProperties => ({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
  });

  return (
    <section style={styles.hero}>
      <div style={styles.overlay} />
      <div style={styles.container}>
        <div style={{ ...styles.content, ...responsive.content }}>
          <div style={{ ...styles.textBlock, ...responsive.textBlock }}>
            <h1 style={{ ...styles.heading, ...responsive.heading, ...fadeInUp('0.1s') }}>
              <span style={styles.subheading}>Your path to</span><br />
              <span style={styles.highlight}>The American Dream</span>
            </h1>
            <p style={{ ...styles.description, ...responsive.description, ...fadeInUp('0.3s') }}>
              Years of experience helping families reach their goals for home and acquisition.
            </p>
            {!isMobile && (
              <div style={{ ...styles.stats, ...responsive.stats, ...fadeInUp('0.4s') }}>
                <div style={styles.stat}><strong>10M+</strong><br />FINANCED</div>
                <div style={styles.stat}><strong>99%</strong><br />CONTRACTS</div>
                <div style={styles.stat}><strong>10+</strong><br />COUNTRIES</div>
              </div>
            )}
            <div style={{ ...styles.buttons, ...responsive.buttons, ...fadeInUp('0.5s') }}>
              <a href="tel:+573001234567" style={styles.primary}>Apply Now</a>
              <a href="#testimonials" style={styles.secondary}>Watch Testimonials</a>
            </div>
          </div>
          <div style={{ ...styles.photoBlock, ...responsive.photoBlock, ...fadeInUp('0.2s') }}>
            <div style={styles.photoFrame}>
              <img src="/sa.jpg" alt="Sandra Cardenas" style={styles.photo} />
            </div>
            <div style={styles.card}>
              <p style={styles.name}>Sandra Cardenas</p>
              <p style={styles.nmls}>NMLS #051799</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    position: 'relative',
    backgroundImage: 'url("/fondo.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4rem 2rem',
    color: '#fff',
    fontFamily: '"Inter", sans-serif',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))',
    zIndex: 0,
  },
  container: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // ✅ centrado en desktop
    gap: '3rem',
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  textBlock: {
    flex: '0 1 60%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  photoBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto', // ✅ centrado horizontal
  },
  photoFrame: {
    borderRadius: '10px',
    padding: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '250px',
    height: '300px',
    aspectRatio: '4 / 3',
    margin: '0 auto 1rem',
    overflow: 'hidden',
    boxShadow: '0 0 20px #2c2c2cff, 0 0 10px #2c2c2cff',
    backdropFilter: 'blur(8px)',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  card: {
    backgroundColor: '#172f72ff',
    color: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    minWidth: '100px',
    fontSize: '1rem',
    backdropFilter: 'none',
    boxShadow: '#2c2c2cff 0px 0px 10px',
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '0.5rem',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
    color: '#fff',
  },
  nmls: {
    fontSize: '1rem',
    color: '#ccc',
  },
  heading: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontWeight: 800,
    lineHeight: 1.3,
    letterSpacing: '0.5px',
    marginBottom: '1rem',
    color: '#fff',
  },
  subheading: {
    color: '#ffffff',
    fontSize: '2rem',
  },
  highlight: {
    color: '#e6c36f',
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
  },
  description: {
    fontSize: '1.1rem',
    color: '#f0f0f0',
    maxWidth: '600px',
    margin: '1rem auto',
  },
  stats: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
 
  },
  stat: {
    backgroundColor: '#172f72ff',
    color: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    minWidth: '100px',
    fontSize: '1rem',
    backdropFilter: 'none',
    boxShadow: '#2c2c2cff 0px 0px 10px',
 
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  primary: {
    backgroundColor: '#e6c36f',
    color: '#000',
    padding: '0.85rem 1.75rem',
    borderRadius: '6px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: '#e6c36f',
    border: '2px solid #e6c36f',
    padding: '0.85rem 1.75rem',
    borderRadius: '6px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
};

export default Hero;
export { Hero };
