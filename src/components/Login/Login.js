import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';

const emailReducer = (state, action) => {
    // console.log(action.type, action);
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'USER_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }; // default return value. above is condition logic to set validity based on includes @
    }
    return { value: '', isValid: false }; // default return value. above is condition logic to set validity based on includes @
};

const passwordReducer = (state, action) => {
    // console.log(action.type, action);
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };

    }
    if (action.type === 'USER_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }; // default return value. above is condition logic to set validity based on includes @
    }
    return { value: '', isValid: false }; // default return value. above is condition logic to set validity based on includes @
};
// this function is located outside the Login function because it doesnt require any info or state from the login funciton. it doesnt need to interact with anything inside the Login component.
// all the info this function needs will be passed into this funciton by React automatically
const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
    const authCtx = useContext(AuthContext);

    // useEffect(() => {
    // 	console.log('[Login] useEffect');
    //  }, []);
    const { isValid: emailIsValid } = emailState; // adding this alias basically allows the thing to not run, once its valid, even more characters, it wont run. this makes it so when these depencies change, it will run again, instead of so often
    const { isValid: passwordIsValid } = passwordState;
    useEffect(() => {
        const identifier = setTimeout(() => {
            // console.log('checking form validity');
            setFormIsValid(
                emailIsValid && passwordIsValid // simple validation for email
            );
        }, 500);
        return () => {
            // console.log('CLEANUP'); // this runs first and clears the timeout, so the first function is cleared
            clearTimeout(identifier);
        }
        // }, [setFormIsValid, emailState, passwordState]); // dependencies are easy, just add WHAT YOU ARE USING in the side effect function, aka setFormIsValid, enteredEmail and enteredPassword. make sure functions arent with the () characters
    }, [emailIsValid, passwordIsValid]); // dependencies are easy, just add WHAT YOU ARE USING in the side effect function, aka setFormIsValid, enteredEmail and enteredPassword. make sure functions arent with the () characters

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
        // setFormIsValid(passwordState.isValid && event.target.value.includes('@'));
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);

        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
        // setFormIsValid(enteredPassword.value.trim().length > 6 && enteredEmail.value.includes('@'));
        // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6 );
        setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({ type: 'USER_BLUR' });
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({ type: 'USER_BLUR' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login} >
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`} >
                    <label htmlFor="email" > E - Mail </label>
                    <input type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler} />
                </div >
                <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`} >
                    <label htmlFor="password" > Password </label>
                    <input type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler} />
                </div >
                <div className={classes.actions} >
                    <Button type="submit"
                        className={classes.btn}
                        disabled={!formIsValid} >
                        Login
                    </Button> </div>
            </form>
        </Card >
    );
};

export default Login;