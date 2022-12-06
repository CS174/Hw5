import React from 'react';
import ReactDOM from 'react-dom/client';  
import SignIn from './Pages/SignIn';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from './Pages/CreateAccount';
import SignInVulnerable from './Pages/SignInVulnerable';
import Profile from './Pages/RefineDateOptions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          <Route path="/loginVulnerable" element={<SignInVulnerable/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
