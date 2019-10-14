import React, { useState } from "react";
import logo from "../images/akkrooLogo.png";

import SecondConfirm from "./buttonComponents/SecondConfirm";

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
          Hello {props.name}, <br /> please confirm your email
        </h2>
      </div>
      <form className="DataForm">
        <div className="emailInput">
          <input 
            className="textInput"
            type="email" 
            placeholder={props.email} 
            defaultValue={emailText}
            onChange={(e => setEmailText(e.target.value))}
          />
          {/* have to doubleclick this confirm to correclty pass up to state */}
          <SecondConfirm handleSecondConfirm={props.getEmail} emailText={emailText} />
        </div>
      </form>
      <div className="formConfirmButton">
      <button className="nextPageButton" onClick={props.countSetter}>Next</button>
      </div>
    </div>
  );
};

export default FirstDataCaptureForm;
