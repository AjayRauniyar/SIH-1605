// src/app/components/Footer.js
import styles from '../../../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.about}>
          <h3>About Naari Raksha</h3>
          <p>
            Naari Raksha is dedicated to providing real-time monitoring and proactive safety measures to ensure the security of women in public spaces. Our mission is to create a safer environment for women through advanced analytics and timely alerts.
          </p>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/alerts">Alerts</a></li>
            <li><a href="/map">Map</a></li>
            <li><a href="/video-analysis">Real-Time Analysis</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.socialMediaIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className={styles.newsletterSignup}>
        <h3>Stay Updated</h3>
        <p>Sign up for our newsletter to receive the latest safety updates and news.</p>
        <form>
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Naari Raksha. All rights reserved.</p>
      </div>
    </footer>
  );
}
