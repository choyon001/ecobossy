import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const Authcontext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            // console.log("Current user:", currentUser);

        });
        return ()=>{
            unsubscribe();
        }
    },[])
    // creating a new user with email and password
    const createNewUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // now creating an update info to store the user information 

    const updateUserInfo = (updatedInfo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updatedInfo);
    }
    //  register with google 
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //  user sign in 
    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user logout 
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // password reset 
    const resetPassword = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
        
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        updateUserInfo,
        signInWithGoogle ,
        signInUser,
        logOut,
        loading,
        resetPassword,
        setLoading
    }
    return (
        <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    );
};

export default AuthProvider;