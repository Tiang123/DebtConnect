import React, {useState} from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import pfp1 from "../img/aiony-haust-3TLl_97HNJo-unsplash.jpg"


export default function Profileactivity(props){
    return(
        <div className="community-container">
            {/* <h2>Community</h2> */}
            <CreatePost img = {pfp1}/>
            <Posts 
                img = {pfp1}
                username = "Jayden Apple"
                text = "Just paid off 30% of my credit card debt in 6 months. #DebtFreeJourney"
            />
            <Posts 
                img = {pfp1}
                username = "Jayden Apple"
                text = "Six days no dessert is saving my wallet! I am 2% closer to debt free :D #DebtFreeJourney"
            />
            <Posts 
                img = {pfp1}
                username = "Jayden Apple"
                text = "I love this support community that keeps me updated on latest loan discounts!"
            />
           
        </div>
    )
}