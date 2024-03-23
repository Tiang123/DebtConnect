import React, {useState} from "react";
import likeIcon from "../img/heart.png"
import shareIcon from "../img/send.png"
import commentIcon from "../img/comment.png"

export default function Posts(props){
    return(
        <div className="posts-container">
            <div className="posts-img-container">
                { <img className="posts-img" src={`${props.img}`} /*wdith="50px" height="50px"*//> }
            </div>
            <div className="posts-right-side">
                <div className="usernamenrole">
                    <h3>{props.username}</h3>
                    <h3 className="consultantuser">{props.role}</h3>
                </div>
                <h4>{props.text}</h4>
                <div className="posts-icons">
                    <img className="posts-icon" src={likeIcon} />
                    <img className="posts-icon" src={shareIcon} />
                    <img className="posts-icon" src={commentIcon} />
                </div>
            </div>
        </div>
    )
}
