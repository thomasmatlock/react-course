// import React, { useState, useEffect } from 'react';
import React, { useContext } from 'react';
// import React from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect is ran after every component function is evaluated. it ALSO ONLY runs if the dependencies we pass it change
    // the anonymous function here only run once, when the app starts. and then it never runs again because with an empty array, it never runs again because no dependencies changed because it has none
    // an empty array is useful because you allow this to run once on startup
    // useEffect runs once on component evaluation, but not everytime after that, only when the dependencies change
    // also, for performance intensive stuff, like retrieving storage data, we can use useEffect to run only when necessary


    const ctx = useContext(AuthContext)
    return (
        < React.Fragment >
            < MainHeader />
            <main>
                {!ctx.isLoggedIn && < Login />}
                {ctx.isLoggedIn && < Home />}
            </main >
        </ React.Fragment>
    );
}

export default App;