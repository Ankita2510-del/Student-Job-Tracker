import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      <nav className="navbar">
        <h2>Student Job Tracker</h2>

        <div>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
        </div>
      </nav>

      {page === "login" ? <Login /> : <Register />}
    </>
  );
}

export default App;