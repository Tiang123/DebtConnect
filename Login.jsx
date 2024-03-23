import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail]= useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="header-container">
                    {/* <img src="src/img/Debt_Free_Dash_Logo.png" width="50" height="50"></img> */}
                    <h1>Login</h1>
                </div>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
                <div className="remember-me-container">
                    <input className="checkbox" type="checkbox" id="remember" name="remember"></input>
                    <label htmlFor="remember">Remember me</label>
                    <button className="link-btn">Forget password</button>
                </div>
                <button type="submit" onClick={()=>props.onFormSwitch('homepage')}>Log In</button>
            </form>

            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}