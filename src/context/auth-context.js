import React from 'react';
// AuthContext is a obj that contains a component, not a component itself
// React.createContext, which this creates app-wide global state
// you need to do 2 things to use this, 1) provide it, and 2) consume it. MAN this is GREAT. consuming it, is basically listening to it
// 1) providing it also means you need to "wrap" all the components that use it, inside of it, so they can listen to it
// wrapping App in it, means everything in App will listen to it, and everything in App will be able to access it
// need 
const AuthContext = React.createContext(
    {
        isLoggedIn: false,
    }
);

export default AuthContext;