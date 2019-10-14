import React from "react";

const SecondConfirm = (props) => {
    return (
        <>
            <button className="confirmButton" onClick={(e) => props.handleSecondConfirm(e, props)}>Confirm</button>
        </>
    );
}

export default SecondConfirm;