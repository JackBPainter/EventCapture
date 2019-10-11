import React from "react";

const FirstConfirm = (props) => {
    return (
        <>
            <button onClick={() => props.handleClick(props)}>{props.name}</button>
        </>
    );
}

export default FirstConfirm;