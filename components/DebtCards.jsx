import React, {useState} from "react";

export default function DebtCards(){
    return(
        <div className="debtcards-container">
            <h3>Debt name</h3>
            <h4>Remaining: <mark>RM85.00</mark></h4>
            <div className="bar-total">
                <div className="bar-paid">
                    <h4>56%</h4>
                </div>
            </div>
        </div>
    )
}