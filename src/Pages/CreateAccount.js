import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import '../Pages-css/Navbar.css';
import '../Pages-css/SignIn.css';
import '../Pages-css/App.css'
import '../Pages-css/createAccount.css'

const CreateAccount = () => {
    const navigate = useNavigate();
    // const form = Object.freeze({
    //     email: "",
    //     name: "",
    //     password: "",
    //     answers:answers
    // })
    // const [formData, setFormData] = useState(form)

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value.trim()
    //     });
    //     console.log(formData);

    // };
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [answers,setAnswers] = useState([])
    const handleChange = (e) =>{
        if(e.target.value == "y"){
            answers[Number(e.target.name.substr(1,e.target.name.length))-1] =1
        }
        else if(e.target.value == "n"){
            answers[Number(e.target.name.substr(1,e.target.name.length))-1] =0
        }
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(answers.length!=10 || name.length==0 || email.length==0||password.length==0){
            alert("Can't continue if form data is incomplete");
            return;
        }
        console.log("Sending create: ", {"name":`${name}`,"email":`${email}`,"password":`${password}`,"answers":`${answers}`});

        fetch("http://localhost:8888/api/create", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name":`${name}`,"email":`${email}`,"password":`${password}`,"answers":`${answers}`})// body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(res =>{
            if(res.success == true){
            alert("account created successfully")
            navigate('/login')}
        else alert("account could not be created")});
        
         // parses JSON response into native JavaScript objects    })
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
            <input type="text" name="name" required className="login-inputbox" onChange={e=>setName(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="email" name="email" required className="login-inputbox" onChange={e=>setEmail(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" name="password" required className="login-inputbox" onChange={e=>setPassword(e.target.value)} />
        </label>
        <label>
            Q1: Do you like romantic comedies?
            <div className="radio-option">
                <input type="radio" id="q1-yes" name="q1" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q1-no" name="q1" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q2: Do you like PHP?
            <div className="radio-option">
                <input type="radio" id="q2-yes" name="q2" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q2-no" name="q2" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q3: Do you have a car?
            <div className="radio-option">
                <input type="radio" id="q3-yes" name="q3" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q3-no" name="q3" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q4: Do you like pets?
            <div className="radio-option">
                <input type="radio" id="q4-yes" name="q4" value="y" onChange={e=>handleChange(e)}/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q4-no" name="q4" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q5: Do you have money?
            <div className="radio-option">
                <input type="radio" id="q5-yes" name="q5" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q5-no" name="q5" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q6: Are your parents well off?
            <div className="radio-option">
                <input type="radio" id="q6-yes" name="q6" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q6-no" name="q6" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q7: Do you like eating food?
            <div className="radio-option">
                <input type="radio" id="q7-yes" name="q7" value="y" onChange={e=>handleChange(e)}/>
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q7-no" name="q7" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q8: Do you like studying?
            <div className="radio-option">
                <input type="radio" id="q8-yes" name="q8" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q8-no" name="q8" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q9: Do you like passing your classes?
            <div className="radio-option">
                <input type="radio" id="q9-yes" name="q9" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q9-no" name="q9" value="n" onChange={e=>handleChange(e)}/>
                <label for="q1-no">No</label>
            </div>
        </label>
        <label>
            Q10: Do you like sleeping?
            <div className="radio-option">
                <input type="radio" id="q10-yes" name="q10" value="y" onChange={e=>handleChange(e)} />
                <label for="q1-yes">Yes</label>

                <input type="radio" id="q10-no" name="q10" value="n" onChange={e=>handleChange(e)}/>
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