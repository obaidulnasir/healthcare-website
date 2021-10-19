import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css"

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
      <div className="my-5">
        <div className="w-50 login mx-auto p-5 rounded">
          <div className="text-center">
            <input onBlur={userEmail} type="email" />
            <br />
            <input onBlur={userPassword} type="password" />
            <br />
            <button onClick={handleUserLogin(email, password)}>Login</button>
            <br />
            <Link to="/register">new user?</Link>
            <hr />
            <button onClick={signInWithGoogle}><i class="bi bi-google"></i> Sign in with Google</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
