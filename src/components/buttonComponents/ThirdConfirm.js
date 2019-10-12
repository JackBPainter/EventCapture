// Can use this component instead of the button in the FirstDataCapture, however this causes the validation to stop working

import React from "react";

const ThirdConfirm = (props) => {
    return (
        <>
            <button onClick={(e) => props.handleThirdConfirm(e, props)}>confirm</button>
        </>
    );
}

export default ThirdConfirm;