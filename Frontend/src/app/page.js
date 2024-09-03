// src/app/page.js
import React from 'react';

// src/app/components/Home.js
import styles from '../../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.heroSection}>
        <h1>Welcome to Naari Raksha</h1>
        <p>Your safety, our priority. Ensuring a safer environment for women through real-time monitoring and advanced analytics.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </header>
      <section className={styles.featuresSection}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Real-Time Alerts</h3>
            <p>Stay informed with instant alerts about suspicious activities.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Interactive Map</h3>
            <p>View high-risk areas in real-time and plan safer routes.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Dashboard Analytics</h3>
            <p>Analyze safety trends and statistics for better decision-making.</p>
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <p>Naari Raksha is committed to ensuring the safety of women through proactive measures and advanced technology. Our platform provides real-time monitoring, analytics, and alerts to keep you safe and informed.</p>
      </section>
    </div>
  );
}
