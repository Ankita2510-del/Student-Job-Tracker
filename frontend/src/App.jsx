import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddJob from "./components/AddJob";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <nav className="navbar">
        <h2>Student Job Tracker</h2>

        <div>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
        </div>
      </nav>

      {page === "login" && <Login />}
{page === "register" && <Register />}
{page === "dashboard" && (
  <Dashboard openAddJob={() => setPage("addjob")} />
)}
{page === "addjob" && <AddJob />}
    </>
  );
}

export default App;