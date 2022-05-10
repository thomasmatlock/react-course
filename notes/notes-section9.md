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
