import React, { createContext } from 'react';
import app from '../../firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
export const Authcontex = createContext()
const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser
    }

    return (
      <Authcontex.Provider value={authInfo}>
          {children}
      </Authcontex.Provider>
    );
};

export default Authprovider;