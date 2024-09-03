// src/app/dashboard/page.js
import React from 'react';
import styles from '../../../styles/dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h2>Dashboard Overview</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Alerts Today</h3>
          <p>5 Alerts</p>
        </div>
        <div className={styles.statCard}>
          <h3>High-Risk Areas</h3>
          <p>3 Areas</p>
        </div>
        <div className={styles.statCard}>
          <h3>Recent Activity</h3>
          <p>10 Incidents</p>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <h3>Alerts</h3>
          <p>View recent alerts and stay informed about suspicious activities in your area. Stay safe by keeping track of potential threats.</p>
          <a href="/alerts" className={styles.cardLink}>Go to Alerts</a>
        </div>
        <div className={styles.card}>
          <h3>Interactive Map</h3>
          <p>Explore real-time data on high-risk areas. Use the map to plan safer routes and avoid dangerous zones.</p>
          <a href="/map" className={styles.cardLink}>View Map</a>
        </div>
        <div className={styles.card}>
          <h3>Real-Time Analysis</h3>
          <p>Analyze live video feeds for gender detection and suspicious activities. Get immediate feedback and alerts.</p>
          <a href="/video-analysis" className={styles.cardLink}>Start Analysis</a>
        </div>
      </div>
    </div>
  );
}
