import React from "react";
import Button from "@mui/material/Button";
import MapLayout from "../components/Map";
import Logs from "../components/Logs";
import UserCard from "../components/UserCard";
import NewNavbar from "../components/NewNavbar";
import Navbar from "../components/Navbar";
import Harshaal from "../images/ff.png";

const routeCoordinates = [
  [73.8567, 18.5204], // Pune, Maharashtra, India
  [73.7898, 18.5079], // Pimpri-Chinchwad, Maharashtra, India
  [73.9733, 18.5333], // Koregaon Park, Pune, Maharashtra, India
  [73.9957, 18.5742], // Aundh, Pune, Maharashtra, India
  [73.9251, 18.5167], // Shivajinagar, Pune, Maharashtra, India
];

console.log(routeCoordinates)

const Dashboard = () => (
  <>
    {/* <NewNavbar /> */}
    {/* <Navbar /> */}
    <div className="flex flex-row ">
      <div className="w-3/4">
        <MapLayout routeCoordinates={routeCoordinates} />
        <Logs routeCoordinates={routeCoordinates} />
      </div>
      <div className="mx-2 my-2 w-1/4 border-4">
        {/* <Search /> */}
        <UserCard
          name="pretty boy"
          description="living on the westside"
          Case="dementia"
          age={20}
          lastLocation="bihar"
          image={Harshaal}
        />
        <div className="mt-10 flex justify-center">
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
  </>
);

export default Dashboard;
