import React, {useState} from "react";
import addIcon from "../img/plus.png";

export default function CreatePost(props){
    return(
        <div className="createpost-container">
            <div className="posts-img-container">
                { <img className="posts-img" src={`${props.img}`} /*wdith="50px" height="50px"*//> }
            </div>
            <div className="createposts-right-side">
                <input className="createPost-input" type="text" placeholder="Make a new post" id="
                createPost" name="createPost"/>
            </div>
            <div>
                <img className="addpost-icon" src={addIcon}/>
            </div>
        </div>
    )
}