import React, { useState } from "react";
import logo from "../images/akkrooLogo.png";

import SecondConfirm from "./buttonComponents/SecondConfirm";
import NextPageButton from "./buttonComponents/NextPageButton";

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
        <div className="emailInput">
          <input 
            type="email" 
            placeholder="Please enter your email"
            defaultValue={props.email || emailText} 
            onChange={(e => setEmailText(e.target.value))}
          />
          <SecondConfirm handleSecondConfirm={props.getEmail} />
        </div>
      </form>
      <div className="formConfirmButton">
      <NextPageButton nextPage={props.countSetter} />
      </div>
    </div>
  );
};

export default FirstDataCaptureForm;
