import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { handleUserRegister } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  const userPassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };
  return (
    <div>
      <div className="text-center my-5 fs-1 fw-bolder">Register</div>
      <div className="w-50 mx-auto register my-5  rounded">
        <div className="w-75 mx-auto py-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">
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
            onClick={handleUserRegister(email, password)}
            class="btn btn-primary"
          >
            Register
          </button>
          <hr />
          <Link to="/login" className="text-white mt-3">
            Already Register??
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
