import React from "react";

const SecondButton = (props) => {
    return (
        <>
            <button onClick={() => props.handleClick2(props)}>confirm</button>
        </>
    );
}

export default SecondButton;