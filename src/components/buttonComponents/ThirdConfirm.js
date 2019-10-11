import React from "react";

const ThirdConfirm = (props) => {
    return (
        <>
            <button onClick={(e) => props.handleThirdConfirm(e, props)}>confirm</button>
        </>
    );
}

export default ThirdConfirm;