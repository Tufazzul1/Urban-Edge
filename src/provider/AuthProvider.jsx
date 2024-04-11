import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase-config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (name, email, photo, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, name, email, photo, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('current user in the satete change' , currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export default AuthProvider;