import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, updateProfile, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types'; // ES6


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const CreateUser = (email, password, displayName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName)
    }
    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // login with Google
    const GoogleProvider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }
    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    // update profile
    const UpdateProfile=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const value = {
        user, loading,
        CreateUser,
        logOut,
        login,
        GoogleLogin,
        UpdateProfile

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;