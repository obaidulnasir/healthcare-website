import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            <button onClick={signInWithGoogle}>Log in with googl</button>
        </div>
    );
};

export default Login;