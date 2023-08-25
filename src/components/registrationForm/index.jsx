import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router";

export const Register = () => {
  const [username, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState( );
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios.post("https://quizattendace.onrender.com/api/user/add", {
        username,contact,password,role,
      }).then(
        (res) => {console.log(res);
          navigate('/') }
      )
      .catch((err) => {console.log(err.message);})
      
      .finally(() => {
        console.log("finally is working");
      });
  };

  return (
    <div class="form">

      <div class="form-register ">
        <h2>Register</h2>
        <form action="#">
          <div class="input-box">
            <input
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div class="input-box">
            <input
              type="text"
              placeholder="contact"
              pattern="0-9"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div class="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          
          <select value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value disabled selected>Select any</option>
            <option value = "faculty">Faculty</option>
            <option value = "student">Student</option>
          </select>

          <div class="remember-forget">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>

          <input type="button" value="Register" onClick={register} />

          <div class="login-register">
            <p>Already have an account?<a href="/" class="login-link">Login</a></p>
          </div>

        </form>
      </div>

    </div>
  );
};
