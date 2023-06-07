import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { Marker, GeolocateControl, FullscreenControl } from "react-map-gl";
const TOKEN =
  "sk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsaWxxdGl1dTB1bnAzcWtqMmNiNjRxYnEifQ.0L0YdGxrvWs37inR18CjQA";

const MapLayout = () => {
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 28.6139,
    longitude: 77.209,
    zoom: 6,
  });

  const handleClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  return (
    <>
      <div style={{ height: "75vh", width: "75vw", zIndex: 999 }}>
        <Map
          initialViewState={viewPort}
          mapboxAccessToken="pk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsMWZ3c2F0ZDAzaDQza29nY2lmODJ3dnAifQ.028eTNgQMls72Sfo-JMXOg"
          width="75%"
          height="75%"
          transitionDuration="200"
          mapStyle="mapbox://styles/harshalranjhani/clilsejzc002l01pg16v21p7j"
          onViewportChange={(viewPort) => setViewPort(viewPort)}
          onDblClick={handleClick}
        >
          <GeolocateControl />
          <FullscreenControl />
          <Marker latitude={28.6139} longitude={77.209} />
        </Map>
      </div>
    </>
  );
};

export default MapLayout;
