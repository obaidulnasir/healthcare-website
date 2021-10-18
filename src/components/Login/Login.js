import React from "react";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  return (
    <div>
      <div className="w-50 mx-auto">
        {user.email}
      </div>
      <button onClick={signInWithGoogle}>Log in with googl</button>
    </div>
  );
};

export default Login;
