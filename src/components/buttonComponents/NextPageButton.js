import React from "react";

const NextPageButton = (props) => {
    return (
        <>
            <button className="nextPageButton" onClick={() => props.nextPage(props)}>Next Page</button>
        </>
    );
}

export default NextPageButton;