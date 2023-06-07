import React, { useState } from "react";
import mapboxSdk from '@mapbox/mapbox-sdk/services/directions';

const Directions = () => {
  const [directions, setDirections] = useState(null);

  const handleGetDirections = async () => {
    const client = mapboxSdk({
      accessToken:
        "pk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsMWZ3c2F0ZDAzaDQza29nY2lmODJ3dnAifQ.028eTNgQMls72Sfo-JMXOg",
    });

    try {
      const response = await client.directions.getDirections({
        waypoints: [
          { coordinates: ["18.5602", "73.8031"] }, // start coordinates
          { coordinates: ["18.5987", "73.7978"] }, // end coordinates
        ],
        profile: "driving-traffic", // choose a profile: driving, walking, cycling, etc.
      });

      setDirections(response.body);
      console.log(directions);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGetDirections}>Get Directions</button>

      {directions && (
        <ul>
          {directions.routes[0].legs.map((leg) => (
            <li key={leg.summary}>
              {leg.summary} ({leg.distance} meters)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Directions;
