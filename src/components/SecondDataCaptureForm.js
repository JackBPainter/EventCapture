import React, { useState } from "react";
import logo from "../images/akkrooLogo.png";

import SecondConfirm from "./buttonComponents/SecondConfirm";

const SecondDataCaptureForm = props => {
  const [post, setPost] = useState('');
  const [opt, setOpt] = useState(false)
  return (
    <div className="SecondDataCaptureForm">
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <div className="componentHeaders">
        <h2>
          Please enter your postcode and let us know <br />if you're happy to
          receive promotional emails
        </h2>
      </div>
      <form className="DataForm">
        <div className="emailInput">
          <input
            className="textInput"
            type="string"
            placeholder="Please enter postcode"
            value={post}          
            pattern="(GIR 0AA|[A-PR-UWYZ]([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
            onChange={(e => setPost(e.target.value))}
          />
          <input 
            className="checkboxInput"
            type="checkbox" 
            onChange={(e => setOpt(e.currentTarget.checked))}
          />
          <br />
          <div className="formConfirmButton">
          <SecondConfirm handleSecondConfirm={props.getPostOpt} post={post} opt={opt} />
          </div>
        </div>
      </form>
      <div className="formConfirmButton">
      <button className="nextPageButton" onClick={props.countSetter}>Next</button>
      </div>
    </div>
  );
};

export default SecondDataCaptureForm;
