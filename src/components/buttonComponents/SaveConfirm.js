import React from "react";

const SaveConfirm = (props) => {
    return (
        <>
            <button className="nextPageButton" onClick={(e) => props.handleSaveConfirm(e, props)}>Save</button>
        </>
    );
}

export default SaveConfirm;