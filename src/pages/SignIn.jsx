import React from "react";
import "../style/SignIn.css"
import { Link } from "react-router-dom";




function signIn() {
  return (
      <form className={"login-box"}>
        <label>
          Username:
          <input type="text" name={"username"} className={"login-inputbox"} />
        </label>

        <label>
          Password:
          <input type={"password"} name={"password"} className={"login-inputbox"} />
        </label>
        <input type={"submit"} value={"Login"} className={"login-button"}/>
      </form>
  );
}
export default signIn;
