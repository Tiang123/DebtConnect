import React, {useState} from "react";

export default function Consultantcard(props){
    
    return(
        <div className="consultantcard-container">
            { <img className="consultant-img" src={`${props.img}`} /> }
            <div className="consultants">
                <h3 className="consultant-name">{props.name}</h3>
                <h4 className="consultant-spec">{props.specialities}</h4>
            </div>
        </div>
    )
}