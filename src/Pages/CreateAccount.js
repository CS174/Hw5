import React, {useState} from 'react'
import '../Pages-css/Navbar.css';
import '../Pages-css/SignIn.css';
import '../Pages-css/App.css'
import '../Pages-css/createAccount.css'
const CreateAccount = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () =>{
        // con.query(`insert into users value(1,"aadit dubey","ffrwf","fefe")`,(err,result)=>{
        //     if(err) throw err
        //     console.log("updated")
        // })
    }
  return (
<div>
<header>
  <div className="navbar">
    <a href="loginVulnerable">Login Vulnerable</a>
    <a href="createAccount">Create Account</a>
  </div>
</header>

<div className="App-header">
    <form className="formbox" >
        <label>
            Full Name:
            <input type="text" name="name" required className="login-inputbox" onChange={(e)=>{setName(e.target.value)}}/>
        </label>
        <label>
            Email:
            <input type="email" name="email" required className="login-inputbox" onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label>
            Password:
            <input type="password" name="password" required className="login-inputbox" onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <label>
            Q1: ADD QUESTION HERE
            <div className="radio-option">
                <input type="radio" id="q1-yes" name="q1" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q1-no" name="q1" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q2:
            <div className="radio-option">
                <input type="radio" id="q2-yes" name="q2" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q2-no" name="q2" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q3:
            <div className="radio-option">
                <input type="radio" id="q3-yes" name="q3" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q3-no" name="q3" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q4:
            <div className="radio-option">
                <input type="radio" id="q4-yes" name="q4" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q4-no" name="q4" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q5:
            <div className="radio-option">
                <input type="radio" id="q5-yes" name="q5" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q5-no" name="q5" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q6:
            <div className="radio-option">
                <input type="radio" id="q6-yes" name="q6" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q6-no" name="q6" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q7:
            <div className="radio-option">
                <input type="radio" id="q7-yes" name="q7" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q7-no" name="q7" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q8:
            <div className="radio-option">
                <input type="radio" id="q8-yes" name="q8" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q8-no" name="q8" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q9:
            <div className="radio-option">
                <input type="radio" id="q9-yes" name="q9" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q9-no" name="q9" value="n"/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q10:
            <div className="radio-option">
                <input type="radio" id="q10-yes" name="q10" value="y"
                       checked/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q10-no" name="q10" value="n"/>
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