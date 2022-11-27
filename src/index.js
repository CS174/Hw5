import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={"App-header"}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="/create" element={<CreateAccount />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
