import React from "react";
import logo from "../images/akkrooLogo.png";
import arrow from "../images/arrow.png";

const FirstDataCaptureForm = props => {
  return (
    <div className="FirstDataCaptureForm">
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <br />
      <div className="componentHeaders">
        <h2>
          Hello Name {props.name}, <br /> Please confirm your email
        </h2>
      </div>
      <form className="DataForm">
        <p className="emailInput">
          <input 
            type="email" 
            placeholder={props.email ? props.email : "Please enter your email"} 
          />
          <button>Confirm</button>
        </p>
      </form>
      <div className="imageContainer">
        <img className="arrow" src={arrow} alt="next page" />
      </div>
    </div>
  );
};

export default FirstDataCaptureForm;
