-   working effects, reducers, and
-   app-wide state, or state spread across multiple components with Context
-   An Effect/Side Effect (these words are interchangeable) is a function that
-   React job is to render UI and react to user input
    -   evaluate and render JSX
    -   manage state and props
    -   react to user input and events
    -   re-evaluate component upon state and prop changes
    -   this is all baked into React via the tools and features covered in this course, ie useState, Hook, props, etc
    -   everything in a component function is concerned with bringing something onto the screen

# side effects

-   side effects are everything else happening in the app besides the UI
-   EXAMPLES:
-   store data in browser or local storage
-   sending HTTP requests to a backend server
-   set and manage timers
-   side effects are all things that arent directed concerned with bringing something onto the screen
-   side effects happen outside normal component evaluation and render cycle, especially since they might delay or block rendering (http requests etc
-   side effects should not go directly into a rendering component because they can create an infinite loop, fetching data, updating state, updating ui, which trigger http request etc
-   we use something called useEffect() hook to handle these non UI concerned functions
-   useEffects uses 2 args
    -   arg1 is a function that executes AFTER every component evaluation IF the specified dependency changes
    -   arg2 is the specified dependencies. the arg1 function only runs if these change
    -   arg1 is side effect function
    -   arg2 is the dependencies
-   something about state, is that the state all is lost everytime you reload the entire page
-   here we are using localStorage to save the state, and also on startup check if the state was persisted
-   instead of localStorage, we import useEffect from react to control when its run, instead of every time, otherwise its a infinite loop
    #112
-   often times you want something to run only once when certain things are re-evaluated
-   the dependency array are teh variables or objects being watched for change
-  effects and side effects are anything that is not a component that reacts to our user interactions
- non effects are what react to our user interactions
- components are just functions that are run, top to bottom, everything in it deals with bringing something on to screen, and reacting to user input
- components may have handlers in their, but overall components are just functions
- components are functions that are concerned with bringing something on to screen
- side effects are everything else not concerned with directly bringing something on to screen, ie like an http request is a good example
- examples are timers, http requests, storing date in local storage, etc
- whenever an effect state changes, the entire component is ran again
- SIDE EFFECTS SHOULD NOT GO DIRECTLY INTO COMPONENTS/FUNCTIONS
- ARG1 is a function that is ran if any of the depencencies change, which are arg2
- useEffect seems to be great for state management
    // when you use useEffect without any dependancies array, its the same as just having that function run outside the useEffect, like a regular function that functions every time the component is evaluated
    // the array of dependancies you pass here tells React that after every login component execution, it will rerun the useEffect ONLY if the dependencies change.
    // if none of them change, it will not rerun
    // we want useEffect to run on every keystroke for email and password
    // you need to add dependencies to watch for changes so it can run when those dependencies change
    // useEffect is great for when data or props change
    // useEffect is great also for changes, something being loaded, input changing etc, but its in response to another action, whatever that means

# useReducer
- useReducer is a hook that allows you to manage state in a component, but in a more powerful way than useState
- its also a bit more complicated to setup, so dont use unless you need to
- its great when you have multi part state, like entered value and validity of the value
- and/or state updates that depend on other state values
- so like checking the email validity is by checking another state, and its not a good idea to set one state based on the state of another state
- this is not a good idea sometimes because some states arent processed in time to be used in another state
- BETTER TO USE if you update a state based on the state of another state
- so useReducer is a function that takes in 2 args
    -   arg1 is the initial state
    -   arg2 is the reducer function
    - this is just like the other state hooks
- the goal is for this is to combine 2 states into one state