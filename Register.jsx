import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail]= useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="header-container">
                    <image ></image>
                    <h1>Register</h1>
                </div>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="Full Name" id="name" name="name"/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email"/>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Confirm Password" id="password" name="password"/>
                <button type="submit" onClick={()=>props.onFormSwitch('login')}>Register</button>
            </form>

            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}