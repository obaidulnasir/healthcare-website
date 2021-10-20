import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, handleUserLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  const userPassword = (e) => {
    let inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  return (
    <div>
      <div className="text-center my-5 fs-1 fw-bolder">Login</div>
      <div className="w-50 mx-auto login my-5 rounded">
        <div className="w-75 mx-auto py-5">
          <div class="mb-3">
            <label class="form-label fw-bold">
              Email address
            </label>
            <input onBlur={userEmail} type="email" class="form-control" />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-bold">
              Password
            </label>
            <input onBlur={userPassword} type="password" class="form-control" />
          </div>
          <button
            onClick={handleUserLogin(email, password)}
            class="btn btn-primary"
          >
            Login
          </button>
          <hr />
          <button onClick={signInWithGoogle} className="btn btn-success">
            <i class="bi bi-google"></i> Sign in with Google
          </button>
          <br />
          <Link to="/register" className="text-white mt-3">
            New User??
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
