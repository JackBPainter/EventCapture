import React from "react";
import logo from "../images/akkrooLogo.png";
import NextPageButton from "./buttonComponents/NextPageButton";

const SecondDataCaptureForm = props => {
  return (
    <div className="SecondDataCaptureForm">
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <div className="componentHeaders">
        <h2>
          Please confirm your postcode and let us know <br />if you're happy to
          receive promotional emails
        </h2>
      </div>
      <form className="DataForm">
        <p className="emailInput">
          <input
            className="postcode"
            type="string"
            pattern="(GIR 0AA|[A-PR-UWYZ]([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
            placeholder="Please enter postcode"
          />
          <input type="checkbox" />
          <br />
          <div className="formConfirmButton">
            <NextPageButton nextPage={props.countSetter} />
          </div>
        </p>
      </form>
      <div className="imageContainer"></div>
    </div>
  );
};

export default SecondDataCaptureForm;
