import React, {useState} from "react";
import Newscard from "./Newscard";
import news1 from "../img/izuddin-helmi-adnan-1e71PSox7m8-unsplash.jpg"
import news2 from "../img/zbynek-burival-GrmwVnVSSdU-unsplash.jpg"
import news3 from "../img/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
import news4 from "../img/piggybank-oqkmdriPiHM-unsplash.jpg"

export default function News(){
    return(
        <div className="news-container">
            <h2>News</h2>
            <Newscard 
                img = {news1}
                title = "BNM Tackles Household Debt"
                tag1 = "#HouseholdDebt"
                tag2 = "#FinancialStability"
                tag3 = "#BNMStrategy"
            />
            <Newscard 
                img = {news2}
                title = "Ecopetrol’s Debt Refinancing Strategy"
                tag1 = "#DebtRefinancing"
                tag2 = "#Ecopetrol"
                tag3 = "#FinancialManagement"
            />
            <Newscard 
                img = {news3}
                title = "Tech Debt vs. Customer Experience"
                tag1 = "#TechDebt"
                tag2 = "#CustomerExperience"
                tag3 = "#BankingSector"
            />
            <Newscard 
                img = {news4}
                title = "Malaysia’s National Debt Urgency"
                tag1 = "#NationalDebt"
                tag2 = "#EconomicPolicy"
                tag3 = "#MalaysiaFinance"
            />
        </div>
    )
}