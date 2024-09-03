// src/app/video-analysis/page.js
"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/video-analysis.module.css';

export default function VideoAnalysisPage() {
  const [cameraActive, setCameraActive] = useState(false);
  const [numWomen, setNumWomen] = useState(0);
  const [numMen, setNumMen] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    if (cameraActive) {
      startVideo();
    } else {
      stopVideo();
    }
  }, [cameraActive]);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        streamRef.current = stream;
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error("Error accessing the camera:", err);
        setCameraActive(false);
      });
  };

  const stopVideo = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    videoRef.current.srcObject = null;
  };

  const toggleCamera = () => {
    setCameraActive(prevState => !prevState);
  };

  return (
    <div className={styles.videoAnalysisContainer}>
      <h2>Real-Time Gender Detection</h2>
      
      <div className={styles.statusBox}>
        <p>Camera Status: <span className={cameraActive ? styles.active : styles.inactive}>{cameraActive ? "Active" : "Inactive"}</span></p>
        <button onClick={toggleCamera} className={styles.toggleButton}>
          {cameraActive ? "Turn Off" : "Turn On"}
        </button>
      </div>

      <div className={styles.videoFeed}>
        <video ref={videoRef} className={styles.videoElement} />
      </div>

      <div className={styles.detectionStats}>
        <div className={styles.stat}>
          <p>Number of Women Detected: <span>{numWomen}</span></p>
        </div>
        <div className={styles.stat}>
          <p>Number of Men Detected: <span>{numMen}</span></p>
        </div>
      </div>

      <button className={styles.alertButton}>Send Alert</button>
    </div>
  );
}
