import React from 'react';
import Button from '@mui/material/Button';
import MapLayout from '../components/Map';
import Logs from '../components/Logs';
import UserCard from '../components/UserCard';

const routeCoordinates = [
  [-122.4194, 37.7749], // Coordinate 1: San Francisco, California
  [-118.2437, 34.0522], // Coordinate 2: Los Angeles, California
];

const Dashboard = () => (
  <div className="flex flex-row ">
    <div className="w-3/4 bg-blue-800">
      <MapLayout routeCoordinates={routeCoordinates} />
      {/* <Logs /> */}
    </div>
    <div className="w-1/4 border-4">
      {/* <Search /> */}
        <UserCard
          name="nilay"
          description="Sexy man"
          case="ate too many human soup now have horrible stomach ache"
          age={20}
          lastLocation="VIT VELLORE"
        />
        <div className="flex justify-center">
          <Button
            type="button"
            variant="contained"
            className="flex w-3/4 justify-center"
            href="/"
          >
            Update Case
          </Button>
        </div>
    </div>
  </div>
);

export default Dashboard;
