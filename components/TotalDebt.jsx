import React, {useState} from "react";

export default function TotalDebt(){
    return(
        <div className="totaldebt-container">
            <h3>Total Debt: <mark>RM5600.78</mark></h3>
            <div className="bar-total">
                <div className="bar-paid">
                    <h4>56%</h4>
                </div>
            </div>
        </div>
    )
}