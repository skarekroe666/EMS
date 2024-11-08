import React, { useState } from 'react'
import './Login.css'

const Login = ({handleLogin}) => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(Email, Password);
        console.log("Email is", Email);
        console.log("Password is", Password);

        setEmail("");
        setPassword("");
    }

  return (
    <div className="container">
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form">
                <input value={Email} onChange={(e) => setEmail(e.target.value)}required className="input" type="Email" placeholder="Email" />
                <input value={Password} onChange={(e) => setPassword(e.target.value)}required className="input" type="Password" placeholder="Password" />
                <button className="button">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login