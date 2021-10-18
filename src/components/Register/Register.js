import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

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
    <div className="text-center ">
      register page
      <div>
        <input onBlur={userEmail} type="email" />
        <br />
        <input onBlur={userPassword} type="password" />
        <br />
        <button onClick={handleUserRegister(email, password)}>Register</button>
        <Link to="/login">Already Registered?</Link>
      </div>
    </div>
  );
};

export default Register;
