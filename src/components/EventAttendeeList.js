import React from "react";
import FirstConfirm from './buttonComponents/FirstConfirm';

import logo from "../images/akkrooLogo.png";
import guestList from "../data/example_data.json";

const EventAttendeeList = (props) => {
  return (
    <div className="EventAttendeeList">
      <div>
        <div className="imageContainer">
          <img className="logo" src={logo} alt="Akkroo Logo" />
        </div>
        <div className="componentHeaders">
          <h2>
            Thanks for attending todays event, <br /> Could you let us know who you are?
          </h2>
        </div>
          <div className="attendees">
              {guestList.guestList
                .map((person, index) => 
                <FirstConfirm key={person.name + index} email={person.email} handleClick={props.getCount} name={person.name} /> )}
          </div>
      </div>
    </div>
  );
};

export default EventAttendeeList;
