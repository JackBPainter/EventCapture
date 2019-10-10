import React, { useState } from "react";
import logo from "../images/akkrooLogo.png";
import arrow from "../images/arrow.png";
import SecondButton from "./SecondButton";

const FirstDataCaptureForm = props => {
  const [emailText, setEmailText] = useState('');
  return (
    <div className="FirstDataCaptureForm">
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <br />
      <div className="componentHeaders">
        <h2>
          Hello {props.name}, <br /> please enter email
        </h2>
      </div>
      <form className="DataForm">
        <p className="emailInput">
          <input 
            type="email" 
            placeholder="Please enter your email"
            value={props.email || emailText} 
            onChange={(e => setEmailText(e.target.value))}
          />
          <SecondButton handleClick2={props.getCount} />
        </p>
      </form>
      <div className="imageContainer">
        <img className="arrow" src={arrow} alt="next page" />
      </div>
    </div>
  );
};

export default FirstDataCaptureForm;
