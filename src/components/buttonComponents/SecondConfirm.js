// Can use this component instead of the button in the FirstDataCapture, however this causes the validation to break

import React from "react";

const SecondConfirm = (props) => {
    return (
        <>
            <button onClick={(e) => props.handleSecondConfirm(e, props)}>confirm</button>
        </>
    );
}

export default SecondConfirm;