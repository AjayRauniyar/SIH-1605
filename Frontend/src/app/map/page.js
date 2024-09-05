"use client"; // Add this line at the top

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle } from '@react-google-maps/api';
import styles from '../../../styles/map.module.css';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '12px',
};

const center = {
  lat: 12.9715987,
  lng: 77.5945627,
};

const zones = [
  {
    name: "Jalahalli",
    zone: "Green",
    description: "Safe area with a low crime rate, mostly residential. Regular police patrols and community vigilance programs contribute to the safety.",
    center: { lat: 13.0645, lng: 77.5481 }, // Near Abbigere
    radius: 2000,
  },
  {
    name: "Nagasandra",
    zone: "Orange",
    description: "Moderate safety, with increased vigilance advised. The area is developing with some incidents reported, mainly around isolated areas.",
    center: { lat: 13.0355, lng: 77.5270 }, // Near IKEA
    radius: 2200,
  },
  {
    name: "Yeshwantpur",
    zone: "Red",
    description: "Higher risk area, especially around the railway station. There have been several reports of theft and harassment, particularly at night.",
    center: { lat: 13.0250, lng: 77.5450 }, // Towards Peenya
    radius: 2500,
  },
  {
    name: "Nagarbhavi",
    zone: "Green",
    description: "Safe, well-established residential area. The presence of parks and schools contributes to a secure environment.",
    center: { lat: 12.9616, lng: 77.5004 },
    radius: 2500,
  },
  {
    name: "MG Road",
    zone: "Red",
    description: "High crime rate area, especially at night. Known for incidents involving tourists and late-night commuters.",
    center: { lat: 12.9716, lng: 77.5946 },
    radius: 1200,
  },
  {
    name: "Koramangala",
    zone: "Orange",
    description: "Moderate crime rate, with a mix of residential and commercial areas. Known for petty crimes, particularly in isolated spots.",
    center: { lat: 12.9260, lng: 77.6762 },
    radius: 1800,
  },
  {
    name: "Whitefield",
    zone: "Red",
    description: "Recent reports of incidents, especially around the IT hubs. Avoid late-night travel as the area is sparsely populated after work hours.",
    center: { lat: 12.9750, lng: 77.7300 },
    radius: 2500,
  },
  {
    name: "HSR Layout",
    zone: "Orange",
    description: "Moderate risk, prefer daytime travel. The area is mostly safe but has seen a rise in burglary cases.",
    center: { lat: 12.9355, lng: 77.6246 },
    radius: 2000,
  },
  {
    name: "Majestic",
    zone: "Orange",
    description: "Busy area with moderate risk, exercise caution. Known for its crowded bus and railway stations where pickpocketing is common.",
    center: { lat: 12.9810, lng: 77.5690 }, // Near Vijayanagar
    radius: 2500,
  },
  {
    name: "Indiranagar",
    zone: "Orange",
    description: "Mixed risk area, stay alert. The area has a vibrant nightlife but also sees incidents of harassment and theft.",
    center: { lat: 12.9783, lng: 77.6401 },
    radius: 1600,
  },
  {
    name: "Sarjapur",
    zone: "Green",
    description: "Safe area with regular police patrolling. The presence of several residential communities and schools adds to the security.",
    center: { lat: 12.9345, lng: 77.6192 },
    radius: 2000,
  },
  {
    name: "Jayanagar",
    zone: "Green",
    description: "Well-established, safe neighborhood. Known for its parks and temples, with a strong community presence.",
    center: { lat: 12.9250, lng: 77.5938 },
    radius: 2000,
  },
  {
    name: "Malleshwaram",
    zone: "Orange",
    description: "Moderate safety, avoid late-night travel. Though mostly residential, there have been some reports of petty crimes.",
    center: { lat: 13.0054, lng: 77.5703 },
    radius: 2000,
  },
  {
    name: "Electronic City",
    zone: "Red",
    description: "Reported incidents, avoid isolated areas. The area is quiet at night, increasing the risk of untoward incidents.",
    center: { lat: 12.8391, lng: 77.6777 },
    radius: 3000,
  },
  {
    name: "Hebbal",
    zone: "Orange",
    description: "Mixed safety, caution advised. The area has seen a mix of residential growth and some reports of theft.",
    center: { lat: 13.0355, lng: 77.5971 },
    radius: 2000,
  },
  {
    name: "Yelahanka",
    zone: "Orange",
    description: "Moderate safety, increased vigilance recommended. The area has both urban and semi-urban features, with some reported incidents.",
    center: { lat: 13.1001, lng: 77.5963 },
    radius: 2500,
  },
  {
    name: "Banashankari",
    zone: "Green",
    description: "Low crime rate, peaceful residential area. Regular community events and police patrols enhance safety.",
    center: { lat: 12.9208, lng: 77.5698 },
    radius: 1800,
  },
  {
    name: "Domlur",
    zone: "Green",
    description: "Low crime rate, mostly residential. Known for its peaceful environment with minimal reported incidents.",
    center: { lat: 12.9555, lng: 77.6398 },
    radius: 1600,
  },
  {
    name: "Frazer Town",
    zone: "Orange",
    description: "Moderate safety level, avoid late-night travel. The area has seen some reports of harassment and theft.",
    center: { lat: 12.9986, lng: 77.6174 },
    radius: 1600,
  },
  {
    name: "BTM Layout",
    zone: "Orange",
    description: "Moderate safety level, be cautious after dark. The area is popular among students, with some reports of petty crimes.",
    center: { lat: 12.9121, lng: 77.6095 },
    radius: 1800,
  },
  {
    name: "Sadashivanagar",
    zone: "Green",
    description: "High-end residential area with a low crime rate. Known for its upscale residences and low incidence of crime.",
    center: { lat: 13.0066, lng: 77.5833 },
    radius: 1800,
  },
  {
    name: "KR Puram",
    zone: "Red",
    description: "High crime rate, avoid late-night travel. The area has seen a rise in incidents, especially around the railway station.",
    center: { lat: 12.9947, lng: 77.6955 },
    radius: 2500,
  },
  {
    name: "Marathahalli",
    zone: "Orange",
    description: "Moderate safety, avoid isolated areas. The area is known for its IT hubs but has seen some reports of burglary.",
    center: { lat: 12.9601, lng: 77.7010 },
    radius: 2000,
  },
  {
    name: "Kengeri",
    zone: "Green",
    description: "Safe, residential area. The presence of schools and parks contributes to the safety of the locality.",
    center: { lat: 12.9112, lng: 77.5101 },
    radius: 2000,
  },
  {
    name: "Raja Rajeshwari Nagar",
    zone: "Green",
    description: "Residential area with a low crime rate. The area is well-patrolled and has an active community watch.",
    center: { lat: 12.9264, lng: 77.5611 },
    radius: 1800,
  },
  {
    name: "Bangalore South",
    zone: "Orange",
    description: "Moderate safety, with varying levels of risk across different neighborhoods. Some areas have reported incidents, especially in less populated spots.",
    center: { lat: 12.8773, lng: 77.5795 },
    radius: 3000,
  },
];



export default function MapPage() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [policeStations, setPoliceStations] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleApiLoaded = (map) => {
    if (window.google && window.google.maps && window.google.maps.places) {
      setMapsLoaded(true);

      const service = new window.google.maps.places.PlacesService(map);

      // Fetch police stations
      const policeRequest = {
        location: center,
        radius: '10000',
        type: ['police'],
      };

      service.nearbySearch(policeRequest, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPoliceStations(results);
        } else {
          console.error('Error fetching police stations:', status);
        }
      });

      // Fetch hospitals
      const hospitalRequest = {
        location: center,
        radius: '10000',
        type: ['hospital'],
      };

      service.nearbySearch(hospitalRequest, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setHospitals(results);
        } else {
          console.error('Error fetching hospitals:', status);
        }
      });
    }
  };

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
  };

  const handlePoliceStationClick = (station) => {
    setSelectedPoliceStation(station);
  };

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.mapPageContainer}>
      <h2>Interactive Map of High-Risk Areas in Bangalore</h2>
      <div className={styles.mapAndDetails}>
        <div className={styles.mapContainer}>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            libraries={['places']}
            onLoad={handleApiLoaded}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
              onLoad={handleApiLoaded}
            >
              {mapsLoaded && zones.map((zone, index) => (
                <React.Fragment key={index}>
                  <Circle
                    center={zone.center}
                    radius={zone.radius}
                    options={{
                      strokeColor: zone.zone === "Red" ? "#FF0000" : zone.zone === "Orange" ? "#FFA500" : "#008000",
                      strokeOpacity: 0, // Removed the border by setting opacity to 0
                      strokeWeight: 0, // No border weight
                      fillColor: zone.zone === "Red" ? "#FF0000" : zone.zone === "Orange" ? "#FFA500" : "#008000",
                      fillOpacity: 0.2, // Reduced opacity
                      clickable: true,
                      zIndex: 1,
                    }}
                    onClick={() => handleZoneClick(zone)} // Display zone info on click
                  />
                </React.Fragment>
              ))}
              {mapsLoaded && policeStations.map((station, index) => (
                <Marker
                  key={index}
                  position={station.geometry.location}
                  icon={{
                    url: "/police.jpg", // Path to your local icon
                    scaledSize: new window.google.maps.Size(26,26), // Smaller icon size
                  }}
                  onClick={() => handlePoliceStationClick(station)}
                />
              ))}
              {mapsLoaded && hospitals.map((hospital, index) => (
                <Marker
                  key={index}
                  position={hospital.geometry.location}
                  icon={{
                    url: "/hospital.jpg", // Path to your local icon
                    scaledSize: new window.google.maps.Size(26, 26), // Smaller icon size
                  }}
                  onClick={() => handleHospitalClick(hospital)}
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
              {selectedHospital && (
                <InfoWindow
                  position={selectedHospital.geometry.location}
                  onCloseClick={() => setSelectedHospital(null)}
                >
                  <div>
                    <h4>{selectedHospital.name}</h4>
                    <p>{selectedHospital.vicinity}</p>
                    <p>Phone: {selectedHospital.formatted_phone_number || 'N/A'}</p>
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
            <p>Select a zone on the map to see details.</p>
          )}
        </div>
      </div>
      
    </div>
  );
}

