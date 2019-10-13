import React from "react";
import logo from "../images/akkrooLogo.png";

import SaveConfirm from "./buttonComponents/SaveConfirm";

const Save = props => {
  return (
    <div>
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Akkroo Logo" />
      </div>
      <div className="formConfirmButton">
        <SaveConfirm handleSaveConfirm={props.save} />
      </div>
    </div>
  );
};

export default Save;
