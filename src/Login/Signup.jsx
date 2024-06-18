import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Add logic to handle signup
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Number:
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button><br />
        <p>Already registered? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;