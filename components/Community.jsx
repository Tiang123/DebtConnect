import React, {useState} from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import pfp1 from "../img/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import pfp2 from "../img/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg"
import pfp3 from "../img/albert-dera-ILip77SbmOE-unsplash.jpg"
import pfp4 from "../img/philip-martin-5aGUyCW_PJw-unsplash.jpg"
import pfp5 from "../img/stefan-stefancik-QXevDflbl8A-unsplash.jpg"
import pfp6 from "../img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import pfp7 from "../img/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
import pfp8 from "../img/amy-hirschi-b3AYk8HKCl0-unsplash.jpg"
import pfp9 from "../img/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
import pfp10 from "../img/juan-encalada-WC7KIHo13Fc-unsplash.jpg"

export default function Community(props){
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
                img = {pfp2}
                username = "Ann Earleen"
                text = "This app is crushing my student loans. 💰💰💰"
            />
            <Posts 
                img = {pfp3}
                username = "Hadyn Lexia"
                text = "Debt app’s snowball method has my finances on track.  #Budgeting"
            />
            <Posts 
                img = {pfp4}
                username = "Codie Damon"
                text = "Just made my final payment on the Visa card! 🎉"
            />
            <Posts 
                img = {pfp5}
                username = "Celia Katharyn"
                text = "💪💪Hit my savings goal this month for my emergency fund."
            />
            <Posts 
                img = {pfp6}
                username = "Joseph Gonzalez"
                role = "・Consultant"
                text = "Take charge of your cash flow! 📊 A personalized budget is your blueprint to financial success. Start plotting your path to a debt-free destiny today!"
            />
            <Posts 
                img = {pfp7}
                username = "Christina White"
                role = "・Consultant"
                text = "💡 #SmartSaver 💡 Spot the leaks in your spending and plug them! 🚰 Every penny saved is a penny earned towards beating debt."
            />
            <Posts 
                img = {pfp8}
                username = "Amy Hirschi"
                role = "・Consultant"
                text = "🎯 It’s not just about paying off debt, it’s about being strategic. Save on interest and stress less. #HighInterest"
            />
            <Posts 
                img = {pfp9}
                username = "Bob Wordsmith"
                role = "・Consultant"
                text = "💼 Lower interest rates mean lower payments. Don’t be shy; ask for that rate cut and watch your debts dwindle. "
            />
            <Posts 
                img = {pfp10}
                username = "Juan Encalada"
                role = "・Consultant"
                text = "Boost your budget with a side hustle! 💼 More money means more power over debt. Find your niche and turn your passion into profit. #SideHustle #EarnExtra"
            />
            {/* <button className="btn-community">View All</button> */}
        </div>
    )
}