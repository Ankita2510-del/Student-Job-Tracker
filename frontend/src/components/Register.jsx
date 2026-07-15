import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Student Registration</h2>

        <input type="text" placeholder="Enter Full Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <input type="password" placeholder="Confirm Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;