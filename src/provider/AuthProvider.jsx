import { createContext, useState } from "react";
import app from './../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const Authcontext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   
    const [user,setUser] = useState({});
    // creating a new user with email and password
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // now creating an update info to store the user information 

    const updateUserInfo = (updatedInfo)=>{
        return updateProfile(auth.currentUser, updatedInfo);
    }
    //  register with google 
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        updateUserInfo,
        signInWithGoogle 
    }
    return (
        <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    );
};

export default AuthProvider;