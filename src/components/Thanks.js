import React from "react";
import logo from "../images/akkrooLogo.png";

const Thanks = props => {
  return (
    <div>
      <div>
        <div className="imageContainer">
          <img className="logo" src={logo} alt="Akkroo Logo" />
        </div>
        <div className="componentHeaders">
          <h2>Thanks for signing up!</h2>
          <button onClick={props.resetCount}>complete</button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;