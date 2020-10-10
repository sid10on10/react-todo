import React from "react";

const StatusBarItem = (props) => {
    return (
        <div className="col justify-content-center">
            <h5>{props.text}</h5>
            <h4>{props.number}</h4>
        </div>
    )
}

export default StatusBarItem