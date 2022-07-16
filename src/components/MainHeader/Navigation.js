import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../context/auth-context';

// {/* below, we use an object which receievs the context/state data as an argument */}
// {/* we also, in the function statements, return all the JSX code */}
// need to make the provider offers a value passed through it
// and then whenever the state changes, the value will passed down to all consuming components
// also the key is what we're passing, and the value is what we're passing
const Navigation = (props) => {
  const ctx = useContext(AuthContext); // this is the simple way of using AuthContext
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav >
  );
};

export default Navigation;
