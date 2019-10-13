import React from "react";

const FirstConfirm = (props) => {
    return (
        <>
            <button className="nextPageButton" onClick={() => props.handleClick(props)}>{props.name}</button>
        </>
    );
}

export default FirstConfirm;