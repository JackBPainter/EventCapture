import React from "react";

const NextPageButton = (props) => {
    return (
        <>
            <button onClick={() => props.nextPage(props)}>Next Page</button>
        </>
    );
}

export default NextPageButton;