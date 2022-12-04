import React, {useState}from 'react'
import '../Pages-css/Navbar.css';
import '../Pages-css/SignIn.css';
import '../Pages-css/App.css'
import {Link} from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const postLogin = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    console.log("Sending login: ", formData);
    const response = await fetch("http://localhost:8888/api/login", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects    })
  }
  return (
    <div className="App">
      
      <header>
        <div className="navbar">
          <a href="loginVulnerable">Login Vulnerable</a> |
          <a href="createAccount">Create Account</a>
        </div>
      </header>
      <body>
        <div className="App-header">
          <form className="login-box">
            <label>
              Email:
              <input type="email" name="email" className="login-inputbox"
                     onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>

            <label>
              Password:
              <input type="password" name="password" className="login-inputbox"
                     onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>

            <button type="submit" value="Login" className="login-button" onClick={postLogin}></button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default SignIn;
