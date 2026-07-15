import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Student Job Tracker</h2>

        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>

      <Login />
    </>
  );
}

export default App;