// src/app/alerts/page.js
import React from 'react';
import styles from '../../../styles/alerts.module.css';


export default function Alerts() {
  return (
    <div className={styles.alertsContainer}>
      <h2>Recent Alerts</h2>
      <ul className={styles.alertList}>
        <li className={styles.alertItem}>
          <div className={styles.alertDetails}>
            <h3>Suspicious Activity Detected</h3>
            <p>Location: Park Avenue, Time: 10:00 PM</p>
          </div>
          <button className={styles.viewButton}>View Details</button>
        </li>
        <li className={styles.alertItem}>
          <div className={styles.alertDetails}>
            <h3>High-Risk Area Alert</h3>
            <p>Location: 5th Avenue, Time: 8:00 PM</p>
          </div>
          <button className={styles.viewButton}>View Details</button>
        </li>
      </ul>
    </div>
  );
}
