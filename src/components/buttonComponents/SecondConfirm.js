import React from "react";

const SecondConfirm = (props) => {
    return (
        <>
            <button onClick={() => props.handleSecondConfirm(props)}>confirm</button>
        </>
    );
}

export default SecondConfirm;