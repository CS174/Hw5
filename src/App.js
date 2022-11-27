import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import "./App.css";

function App() {
  return (
    <div className={"App"}>
      <SignIn />
    </div>
  );
}

export default App;
