import React, { createContext } from 'react';
import app from '../../firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
export const AuthContext = createContext()
const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser,
        login
    }

    return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
    );
};

export default Authprovider;