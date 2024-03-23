import React, {useState} from "react";
import Totaldebt from "./TotalDebt"
import pfp1 from "../img/aiony-haust-3TLl_97HNJo-unsplash.jpg"

export default function SmallProfile(){
    return(
        <div className="smallprofile-container">
            <div className="smallprofile-img-container">
                <img className="profile-img" src={pfp1}/>
                <h3>@jayyden21</h3>
                <h4>Malaysia</h4>
            </div>
            <div className="smallprofile-debt-container">
                {/* <Totaldebt /> */}
                <h3>Total debt:</h3>
                <div className="piechart" />
                <div className="debtlabel">
                    <div className="labeltext">
                        <h4>Mortage</h4>
                        <h4 className="semitransparent">50% to go</h4>
                    </div>
                    <div className="debtbar1"></div>
                </div>
                <div className="debtlabel">
                    <div className="labeltext">
                        <h4>Credit card</h4>
                        <h4 className="semitransparent">47% to go</h4>
                    </div>
                    <div className="debtbar2"></div>
                </div>
                <div className="debtlabel">
                    <div className="labeltext">
                        <h4>Car loan</h4>
                        <h4 className="semitransparent">78% to go</h4>
                    </div>
                    <div className="debtbar3"></div>
                </div>
            </div>
        </div>
    )
}