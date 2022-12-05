import React, {useState}from 'react'
import '../Pages-css/Navbar.css';
import '../Pages-css/SignIn.css';
import '../Pages-css/App.css'
import {Link,useNavigate} from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const postLogin = (e) => {
    e.preventDefault();
    const data = { "email": email, "password": password };
    console.log("Sending login: ", data);
    fetch("http://localhost:8888/api/login", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then((res)=>(res.json()))
    .then((res)=>{
      if(res.success==false) alert("wrong login information")
      else{
        alert("login successful")
        navigate(`/profile?email=${email}`)
      }
    })
     // parses JSON response into native JavaScript objects    })
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
