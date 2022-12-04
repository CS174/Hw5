import React, {useState} from 'react'
import '../Pages-css/Navbar.css';
import '../Pages-css/SignIn.css';
import '../Pages-css/App.css'
import '../Pages-css/createAccount.css'
import {Link} from "react-router-dom";
const CreateAccount = () => {
    const form = Object.freeze({
        email: "",
        name: "",
        password: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: ""
    })
    const [formData, setFormData] = useState(form)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
        console.log(formData);

    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        for (let x in formData) {
            if (formData[x].length === 0) {
                console.log("Can't continue if form data is incomplete");
                return;
            }
        }
        const data = JSON.stringify(formData);
        console.log("Sending create: ", data);
        const response = await fetch("http://localhost:8888/api/create", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects    })
    }
  return (
<div>
<header>
  <div className="navbar">
      <a href="login">Login</a> |
      <a href="loginVulnerable">Login Vulnerable</a> |
  </div>
</header>

<div className="App-header">
    <form className="formbox" onSubmit={handleSubmit} >
        <label>
            Full Name:
            <input type="text" name="name" required className="login-inputbox" onChange={(e)=>{handleChange(e)}} />
        </label>
        <label>
            Email:
            <input type="email" name="email" required className="login-inputbox" onChange={(e)=>{handleChange(e)}}/>
        </label>
        <label>
            Password:
            <input type="password" name="password" required className="login-inputbox" onChange={(e)=>{handleChange(e)}}/>
        </label>
        <label>
            Q1: Do you like romantic comedies?
            <div className="radio-option">
                <input type="radio" id="q1-yes" name="q1" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q1-no" name="q1" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q2: Do you like PHP?
            <div className="radio-option">
                <input type="radio" id="q2-yes" name="q2" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q2-no" name="q2" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q3:
            <div className="radio-option">
                <input type="radio" id="q3-yes" name="q3" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q3-no" name="q3" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q4:
            <div className="radio-option">
                <input type="radio" id="q4-yes" name="q4" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q4-no" name="q4" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q5:
            <div className="radio-option">
                <input type="radio" id="q5-yes" name="q5" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q5-no" name="q5" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q6:
            <div className="radio-option">
                <input type="radio" id="q6-yes" name="q6" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q6-no" name="q6" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q7:
            <div className="radio-option">
                <input type="radio" id="q7-yes" name="q7" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q7-no" name="q7" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q8:
            <div className="radio-option">
                <input type="radio" id="q8-yes" name="q8" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q8-no" name="q8" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q9:
            <div className="radio-option">
                <input type="radio" id="q9-yes" name="q9" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q9-no" name="q9" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q10:
            <div className="radio-option">
                <input type="radio" id="q10-yes" name="q10" value="y" onChange={(e)=>{handleChange(e)}} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q10-no" name="q10" value="n" onChange={(e)=>{handleChange(e)}}/>
                <label for="q1-no">No</label>
            </div>
        </label>

        <button type="submit" value="Create Account" className="login-button" onClick={handleSubmit}>
            Create Account
        </button>
    </form>
</div>
</div>
  )
}
// action="http://localhost:8888/api/createAccount" method="POST"
export default CreateAccount