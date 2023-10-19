import React, { useState } from "react";

function ContentBlock ({startDate, endDate, location, header, subHeader, description}) {

    return (
        <div className="contentBlock">
            <div className="dateAndLocation">
                <div>{startDate} - {endDate}</div>
                <div>{location}</div>
            </div>

            <div className="specifics">
                <div className="specificsHeader">{header}</div>
                <div className="specificsSubHeader">{subHeader}</div>
                <div>{description}</div>
            </div> 
        </div>
    )
}

export default ContentBlock;