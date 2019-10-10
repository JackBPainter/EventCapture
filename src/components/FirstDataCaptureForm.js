import React, { useState } from "react";
import logo from "../images/akkrooLogo.png";
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
            defaultValue={props.email || emailText} 
            onChange={(e => setEmailText(e.target.value))}
          />
          <SecondButton handleClick2={props.getCount} confirmedEmail={props.defaultValue} />
        </p>
      </form>
      <div className="formConfirmButton">
        <button handleClick2={props.getCount}>next</button>
      </div>
    </div>
  );
};

export default FirstDataCaptureForm;
