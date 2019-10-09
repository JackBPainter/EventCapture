import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import logo from "../images/akkrooLogo.png";
import guestList from "../data/example_data.json";

const EventAttendeeList = () => {
  return (
    <div className="EventAttendeeList">
      <div>
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <div className="componentHeaders">
        <h2>
          Thanks for attending todays event, <br /> could you let us know who
          you are?
        </h2>
      </div>
      <div className="attendees">
      {guestList.guestList.map((person, index) => (
        <button>{person.name}</button>
      ))}
      </div>
      </div>
    </div>
  );
};

export default EventAttendeeList;
