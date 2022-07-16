import React, { useState, useEffect } from 'react';
// AuthContext is a obj that contains a component, not a component itself
// React.createContext, which this creates app-wide global state
// you need to do 2 things to use this, 1) provide it, and 2) consume it. MAN this is GREAT. consuming it, is basically listening to it
// 1) providing it also means you need to "wrap" all the components that use it, inside of it, so they can listen to it
// wrapping App in it, means everything in App will listen to it, and everything in App will be able to access it
// need 
// put default contexts into this
const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => { },
        onLogin: (email, password) => { }
    }
);

export const AuthContextProvider = (props) => {
    const { isLoggedIn, setIsLoggedIn } = useState(false);

    useEffect(() => {
        const storedUserLoginInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoginInfo === '1') {
            setIsLoggedIn(true);
        }
    }, []); // arg1 is a function, it can be anonymous. arg2 is an array of dependencies

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');

        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1'); // this takes 2 args, key and value, for this 1 = logged in, 0 = not logged in

        setIsLoggedIn(true);
    }
    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}> {props.children}</AuthContext.Provider >

}

export default AuthContext;