import React from "react";
import logo from "../images/akkrooLogo.png";

const Reset = props => {
  return (
    <div>
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <div className="componentHeaders">
        <h2>Thanks for attending todays event!</h2>
      </div>
      <div className="formConfirmButton">
        <button className="nextPageButton" onClick={props.countSetter}>Next</button>
      </div>
    </div>
  );
};

export default Reset;
