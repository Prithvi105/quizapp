// import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router";

export const Login = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const login = (e) => {
    e.preventDefault();
    axios.post("https://server-api1-li2k.onrender.com/api/user/login", {
        contact,password,
      }).then((res) => {
        console.log(res.data);
        navigate('/quesForm')
      })
      
      .catch((err) => {console.log(err.message);})
      .finally(() => {
        console.log("finally is working");
      });
  };

  // export const Login = () =>
  return (
    <>
        <div class="form">

            <div class="form-login">
               <h2>Login</h2>
               <form action="">
                    <div class="input-box">
                    <input
                        type="text"
                        placeholder="Contact"
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

                    <div class="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/login">Forgot Password?</a>
                    </div>

                    <input 
                    type="button" 
                    value="Login" 
                    onClick={login} 
                    />

                    <div class="login-register">
                    <p> Don't have account?<a href="registration" class="register-link">Register</a></p>
                    </div>
                </form>
            </div>
            
        </div>
    </>
  );
};
export default Login;
