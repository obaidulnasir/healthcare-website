import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = ()=>{
    const [user, setUser]= useState({});
    const [error, setError]= useState("");

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const signInWithGoogle =()=>{
        signInWithPopup(auth, provider)
        .then (result=>{
            const user = result.user;
            setUser(user)
        })
        .catch((error) => {
            setError( error.message)
          })
    }

    return{
        user,
        error,
        signInWithGoogle
    }
}

export default useFirebase;