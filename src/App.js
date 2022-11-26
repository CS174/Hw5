import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/create" element={<CreateAccount />} />
          <Link></Link>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
