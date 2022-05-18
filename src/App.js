import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// useEffect is ran after every component function is evaluated. it ALSO ONLY runs if the dependencies we pass it change
	// the anonymous function here only run once, when the app starts. and then it never runs again because with an empty array, it never runs again because no dependencies changed because it has none
	// an empty array is useful because you allow this to run once on startup
	// useEffect runs once on component evaluation, but not everytime after that, only when the dependencies change
	// also, for performance intensive stuff, like retrieving storage data, we can use useEffect to run only when necessary
	useEffect(() => {
		const storedUserLoginInfo = localStorage.getItem('isLoggedIn');
		if (storedUserLoginInfo === '1') {
			setIsLoggedIn(true);
		}
	}, []); // arg1 is a function, it can be anonymous. arg2 is an array of dependencies
	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', '1'); // this takes 2 args, key and value, for this 1 = logged in, 0 = not logged in
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	return (
		<React.Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</React.Fragment>
	);
}

export default App;
