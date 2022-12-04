import './App.css';
import {useState} from "react";

function App() {
  const isLoggedIn = useState(false);

  return (
    <div className="App">
      <header className="">
      </header>
        <form>
            <label>
                Username:
                <input type="text" name={"username"} />
            </label>
            <label>
                Password:
                <input type={"password"} name={"password"} />
            </label>
            <input type={"submit"} value={"Login"} />
        </form>
    </div>
  );
}

export default App;
