// import React, { useState, useRef, useEffect } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxDirections, { DIRECTIONS } from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
// import Map from "react-map-gl";
// import mapboxgl from "mapbox-gl";
// // import "@mapbox/mapbox-gl/dist/mapbox-gl.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsMWZ3c2F0ZDAzaDQza29nY2lmODJ3dnAifQ.028eTNgQMls72Sfo-JMXOg";
// import { Marker, GeolocateControl, FullscreenControl } from "react-map-gl";
// // import Directions from "@mapbox/mapbox-sdk/services/directions";
// import Directions from "./Directions";
// // const TOKEN =
// //   "sk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsaWxxdGl1dTB1bnAzcWtqMmNiNjRxYnEifQ.0L0YdGxrvWs37inR18CjQA";

// const MapLayout = () => {
//   const [newPlace, setNewPlace] = useState(null);
//   const [viewPort, setViewPort] = useState({
//     latitude: 28.6139,
//     longitude: 77.209,
//     zoom: 6,
//   });
//   //   const mapRef = useRef();

//   const handleClick = async (e) => {
//     const [longitude, latitude] = e.lngLat;
//     setNewPlace({
//       lat: latitude,
//       long: longitude,
//     });
//   };

//   const mapContainerRef = useRef(null);
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/harshalranjhani/clilsejzc002l01pg16v21p7j", // choose a style
//       center: [viewPort.longitude, viewPort.latitude], // set the initial center coordinates
//       zoom: 12, // set the initial zoom level
//     });

//     // Clean up on component unmount
//     return () => map.remove();
//   }, []);

//   return (
//     <>
//       <div
//         ref={mapContainerRef}
//         style={{ height: "75vh", width: "75vw", zIndex: 999 }}
//       >
//       </div>
//         {/* <Directions /> */}
//         <Directions />
//     </>
//   );
// };

// export default MapLayout;
import React, { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxDirections from "@mapbox/mapbox-sdk/services/directions";
import Map from "react-map-gl";
import mapboxgl from "mapbox-gl";
import {
  Marker,
  GeolocateControl,
  FullscreenControl,
  Source,
  Layer,
} from "react-map-gl";

const MapLayout = ({ routeCoordinates }) => {
  const [route, setRoute] = React.useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 28.6139,
    longitude: 77.209,
    zoom: 6,
  });
  //   const mapRef = useRef();

  const handleClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const mapContainerRef = React.useRef(null);

  const directionsClient = MapboxDirections({
    accessToken:
      "pk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsMWZ3c2F0ZDAzaDQza29nY2lmODJ3dnAifQ.028eTNgQMls72Sfo-JMXOg",
  });

  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFyc2hhbHJhbmpoYW5pIiwiYSI6ImNsMWZ3c2F0ZDAzaDQza29nY2lmODJ3dnAifQ.028eTNgQMls72Sfo-JMXOg";

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/harshalranjhani/clilsejzc002l01pg16v21p7j", // Or use your desired map style
      center: [viewPort.longitude, viewPort.latitude], // Set the initial center of the map
      zoom: 6, // Set the initial zoom level
    });

    // directionsClient
    //   .getDirections({
    //     waypoints: [
    //       { coordinates: [73.8031, 18.5602] }, // start coordinates
    //       { coordinates: [73.7978, 18.5987] }, // end coordinates
    //     ],
    //     profile: "driving",
    //   })
    //   .send()
    //   .then((response) => {
    //     console.log(response.body);
    //     const route = response.body.routes[0];
    //     console.log("Optimal route:", route);
    //     setRoute(route);
    //     // You can use the route information to display the optimal route on the map
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error.message);
    //   });

    //   return;

    if (routeCoordinates) {
        const coordinatesString = routeCoordinates.map(coord => `${coord[0]},${coord[1]}`).join(';');
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinatesString}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
        

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data  );
          const route = data.routes[0].geometry;

          map.on("load", () => {
            map.addSource("route", {
              type: "geojson",
              data: {
                type: "Feature",
                geometry: route,
              },
            });

            map.addLayer({
              id: "route",
              type: "line",
              source: "route",
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#3887be",
                "line-width": 5,
                "line-opacity": 0.75,
              },
            });
          });
        });
    }
    
    routeCoordinates.forEach((coordinate, index) => {
      const marker = new mapboxgl.Marker().setLngLat(coordinate).addTo(map);

      // Create a popup for each marker
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `Marker ${index + 1}`
      );
      marker.setPopup(popup);
    });
  }, []);

  const layerStyle = {
    id: "route",
    type: "line",
    paint: {
      "line-color": "#0074D9",
      "line-width": 3,
    },
  };

  return (
    <div
      ref={mapContainerRef}
      style={{ height: "75vh", width: "75vw", zIndex: 999 }}
    >
      {/* <GeolocateControl />
        <FullscreenControl />
        <Marker latitude={18.5602} longitude={73.8031} />
        <Marker latitude={18.5987} longitude={73.7978} />
        {route && (
          <Source type="geojson" data={route?.geometry}>
            <Layer {...layerStyle} />
          </Source>
        )} */}
    </div>
  );
};

export default MapLayout;
