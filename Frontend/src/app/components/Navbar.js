// src/app/components/Navbar.js
import styles from '../../../styles/navbar.module.css';
export default function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles['navbar-container']}>
          <div className={styles.logo}>Naari Raksha</div>
          <div className={styles['navList-container']}>
            <ul className={styles.navList}>
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/video-analysis">Real-Time Analysis</a></li>
              <li><a href="/alerts">Alerts</a></li>
              <li><a href="/map">Map</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }