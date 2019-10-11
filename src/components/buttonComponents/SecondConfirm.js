import React from "react";

const SecondConfirm = (props) => {
    return (
        <>
            <button onClick={(e) => props.handleSecondConfirm(e, props)}>confirm</button>
        </>
    );
}

export default SecondConfirm;