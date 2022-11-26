import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginBox = styled.div`
  margin: auto;
  margin-top: 200px;
  width: 520px;
  height: 522px;
  background: #dfdfdf;
  border-radius: 4px;
`;

const Inputbox = styled.div`
  background-color: white;
  margin: auto;
  width: 350px;
  height: 50px;
  border-radius: 4px;
  type: text;
  margin-bottom: 12px;
`;

const Button = styled.div`
  background-color: #545454;
  margin: auto;
  width: 350px;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

function signIn() {
  return (
    <div>
      <LoginBox>
        <p>
          <b>Log In </b>
        </p>
        <Inputbox type="text" id="" label="ID" placeholder="ID" />
        <Inputbox type="text" id="" label="PSW" placeholder="Password" />
        <Button type="button">Login</Button>
      </LoginBox>
    </div>
  );
}
export default signIn;
