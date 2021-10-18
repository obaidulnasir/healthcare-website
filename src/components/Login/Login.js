import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, user, handleUserLogin } = useAuth();

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

    const userEmail = (e)=>{
        const inputEmail = e.target.value;
       setEmail(inputEmail);
    }
    const userPassword = (e)=>{
        const inputPassword = e.target.value;
       setPassword(inputPassword);
    }

  return (
    <div className="text-center">
      <div className="w-50 mx-auto">
        {user.email}
        <div>
            <input onBlur={userEmail} type="email" />
            <br />
            <input onBlur={userPassword} type="password" />
            <br />
            <button onClick={handleUserLogin(email,password)}>Login</button>
            <Link to="/register">new user?</Link>
        </div>
      </div>
      <button onClick={signInWithGoogle}>Log in with googl</button>
    </div>
  );
};

export default Login;
