import React, {useState} from "react";

export default function Newscard(props){
    return(
        <div className="newscard-container">
            { <img className="news-img" src={`${props.img}`} /> }
            <h3 className="newstitle">{props.title}</h3>
            <div className="newstag">
                <h4 className="ntags">{props.tag1}</h4>
                <h4 className="ntags">{props.tag2}</h4>
                <h4 className="ntags">{props.tag3}</h4>
            </div>
        </div>
    )
}