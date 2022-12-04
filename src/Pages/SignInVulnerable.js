import React, {useState}from 'react'
import '../Pages-css/Navbar.css';
import '../Pages-css/SignIn.css';
import '../Pages-css/App.css'
import {Link} from "react-router-dom";
function SignInVulnerable() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="App">
      
      <header>
        <div className="navbar">
            <a href="login">Login</a> |
            <a href="createAccount">Create Account</a>
        </div>
      </header>
      <body>

      <div className="App-header">
        <form className="login-box">
          <label>
            Email:
            <input type="email" name="email" className="login-inputbox" />
          </label>

          <label>
            Password:
            <input type="password" name="password" className="login-inputbox" />
          </label>

          <button type="submit" value="Login" className="login-button"></button>
        </form>
      </div>

      </body>


    </div>
  );
}

export default SignInVulnerable;
