import React from 'react';
import Button from '@mui/material/Button';
import Map from '../components/Map';
import Logs from '../components/Logs';
import UserCard from '../components/UserCard';

const Dashboard = () => (
  <div className="flex flex-row ">
    <div className="w-3/4 bg-blue-800">
      <Map />
      <Logs />
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
