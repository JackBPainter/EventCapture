import React from "react";
import logo from "../images/akkrooLogo.png";

const SecondDataCaptureForm = props => {
  return (
    <div className="SecondDataCaptureForm">
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <div className="componentHeaders">
        <h2></h2>
      </div>
      <form className="DataForm">
        <p className="emailInput">
          <input 
            type="string" 
            pattern="^(GIR 0AA)|((([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z]))))[0-9][A-Z]{2})$" 
            placeholder="Please enter your postcode" 
          />
        <button>confirm</button>
        </p>
      </form>
      <div className="imageContainer">
      </div>
    </div>
  );
};

export default SecondDataCaptureForm;
