import "./Login.css";
function Login() {
  const handleLogin = () => {
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Student Login</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;