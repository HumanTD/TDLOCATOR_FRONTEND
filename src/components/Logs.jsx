import React from "react";

const Logs = ({ routeCoordinates }) => (
  console.log(routeCoordinates),
  (
    <div className="m-4">
      {routeCoordinates?.map((coordinate) => (
        <div>
          {coordinate[0]} : {coordinate[1]} - Processing...
        </div>
      ))}
    </div>
  )
);

export default Logs;
