// import React, { useState, useEffect, useReducer } from 'react';
import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') { 
        return {value: action.val, isValid:action.val.includes('@')}; 
    }
    if (action.type === 'USER_BLUR')    {
        return {value: state.value, isValid: state.value.includes('@')}; // default return value. above is condition logic to set validity based on includes @
     }
    return {value: '', isValid: false}; // default return value. above is condition logic to set validity based on includes @
}; // this function is located outside the Login function because it doesnt require any info or state from the login funciton. it doesnt need to interact with anything inside the Login component.
// all the info this function needs will be passed into this funciton by React automatically
const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false});

	// useEffect(() => {
		// console.log('[Login] useEffect');
	//  }, []);

	// useEffect(() => {
	// 	const identifier = setTimeout(() => { 
	// 		// console.log('checking form validity');
	// 		setFormIsValid(
	// 			enteredEmail.includes('@') && enteredPassword.trim().length > 6 // simple validation for email
	// 			);
	// 		}, 250);
	// 	return () => {
	// 		// console.log('CLEANUP'); // this runs first and clears the timeout, so the first function is cleared
	// 		clearTimeout(identifier);
	// 	}
    // }, [setFormIsValid, enteredEmail, enteredPassword]); // dependencies are easy, just add WHAT YOU ARE USING in the side effect function, aka setFormIsValid, enteredEmail and enteredPassword. make sure functions arent with the () characters

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
        setFormIsValid(enteredPassword.trim().length > 6 && event.target.value.includes('@'));
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        // setFormIsValid(enteredPassword.value.trim().length > 6 && enteredEmail.value.includes('@'));
        setFormIsValid(emailState.isValid && event.target.value.trim().length > 6 );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({type: 'USER_BLUR'});
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, enteredPassword);
    };

    return ( <
        Card className = { classes.login } >
        <
        form onSubmit = { submitHandler } >
        <
        div className = { `${classes.control} ${
						emailState.isValid === false ? classes.invalid : ''
					}` } >
        <
        label htmlFor = "email" > E - Mail < /label> <
        input type = "email"
        id = "email"
        value = { emailState.value }
        onChange = { emailChangeHandler }
        onBlur = { validateEmailHandler }
        /> < /
        div > <
        div className = { `${classes.control} ${
						passwordIsValid === false ? classes.invalid : ''
					}` } >
        <
        label htmlFor = "password" > Password < /label> <
        input type = "password"
        id = "password"
        value = { enteredPassword }
        onChange = { passwordChangeHandler }
        onBlur = { validatePasswordHandler }
        /> < /
        div > <
        div className = { classes.actions } >
        <
        Button type = "submit"
        className = { classes.btn }
        disabled = {!formIsValid } >
        Login <
        /Button> < /
        div > <
        /form> < /
        Card >
    );
};

export default Login;