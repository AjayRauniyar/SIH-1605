// src/app/map/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from '../../../styles/map.module.css';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '12px',
};

const center = {
  lat: 12.9715987, // Center on Bangalore
  lng: 77.5945627,
};

const zones = [
  { lat: 12.9715987, lng: 77.5945627, name: "MG Road", zone: "Red", description: "High crime rate area, especially at night." },
  { lat: 12.926031, lng: 77.676246, name: "Koramangala", zone: "Orange", description: "Moderate crime rate, be cautious." },
  { lat: 12.985119, lng: 77.605673, name: "Indiranagar", zone: "Green", description: "Low crime rate, generally safe." },
  { lat: 12.971863, lng: 77.641982, name: "Whitefield", zone: "Red", description: "Recent reports of incidents, avoid late-night travel." },
  { lat: 12.935522, lng: 77.624576, name: "HSR Layout", zone: "Orange", description: "Moderate risk, prefer daytime travel." },
  { lat: 12.935045, lng: 77.618835, name: "Bellandur", zone: "Green", description: "Safe for travel, well-lit streets." },
  { lat: 12.961415, lng: 77.638320, name: "Brigade Road", zone: "Red", description: "Crowded area with high risk at night." },
  { lat: 12.978347, lng: 77.640079, name: "Ulsoor", zone: "Orange", description: "Mixed risk area, stay alert." },
  { lat: 12.934534, lng: 77.619233, name: "Sarjapur", zone: "Green", description: "Safe area with regular police patrolling." },
];

export default function MapPage() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [policeStations, setPoliceStations] = useState([]);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleApiLoaded = (map) => {
    if (window.google && window.google.maps && window.google.maps.places) {
      setMapsLoaded(true);

      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        location: center,
        radius: '5000',
        type: ['police'],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPoliceStations(results);
        } else {
          console.error('Error fetching police stations:', status);
        }
      });
    }
  };

  const handleMarkerClick = (zone) => {
    setSelectedZone(zone);
  };

  const handlePoliceStationClick = (station) => {
    setSelectedPoliceStation(station);
  };

  if (!isClient) {
    return null; // Avoid rendering the map on the server side
  }

  return (
    <div className={styles.mapPageContainer}>
      <h2>Interactive Map of High-Risk Areas in Bangalore</h2>
      <div className={styles.mapAndDetails}>
        <div className={styles.mapContainer}>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            libraries={['places']} // Explicitly load the Places library
            onLoad={handleApiLoaded}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
              onLoad={handleApiLoaded}
            >
              {mapsLoaded && zones.map((zone, index) => (
                <Marker
                  key={index}
                  position={{ lat: zone.lat, lng: zone.lng }}
                  label={{
                    text: zone.name,
                    color: "white",
                    fontSize: "12px",
                  }}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor:
                      zone.zone === "Red"
                        ? "red"
                        : zone.zone === "Orange"
                        ? "orange"
                        : "green",
                    fillOpacity: 1,
                    strokeWeight: 1,
                  }}
                  onClick={() => handleMarkerClick(zone)}
                />
              ))}
              {mapsLoaded && policeStations.map((station, index) => (
                <Marker
                  key={index}
                  position={station.geometry.location}
                  label={{
                    text: station.name,
                    color: "blue",
                    fontSize: "10px",
                  }}
                  icon={{
                    url: "/police.jpg", // Path to your local icon
                    scaledSize: new window.google.maps.Size(40, 40), // Scale the icon size
                  }}
                  onClick={() => handlePoliceStationClick(station)}
                />
              ))}
              {selectedPoliceStation && (
                <InfoWindow
                  position={selectedPoliceStation.geometry.location}
                  onCloseClick={() => setSelectedPoliceStation(null)}
                >
                  <div>
                    <h4>{selectedPoliceStation.name}</h4>
                    <p>{selectedPoliceStation.vicinity}</p>
                    <p>Phone: {selectedPoliceStation.formatted_phone_number || 'N/A'}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
        <div className={styles.detailsContainer}>
          {selectedZone ? (
            <div>
              <h3>{selectedZone.name} - {selectedZone.zone} Zone</h3>
              <p>{selectedZone.description}</p>
            </div>
          ) : (
            <p>Select a location on the map to see details.</p>
          )}
        </div>
      </div>
      <div className={styles.safetyTips}>
        <h3>Women Safety Tips in Bangalore</h3>
        <ul>
          <li>Always prefer well-lit and busy streets for travel.</li>
          <li>Use reliable ride-sharing services and avoid late-night solo travel.</li>
          <li>Keep emergency contacts and nearby help centers in your phone.</li>
          <li>Report any suspicious activities immediately to the local authorities.</li>
        </ul>
      </div>
    </div>
  );
}
