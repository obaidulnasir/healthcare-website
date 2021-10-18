import React from "react";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <button onClick={signInWithGoogle}>Log in with googl</button>
    </div>
  );
};

export default Login;
