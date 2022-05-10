https://github.com/academind/react-complete-guide-code/blob/01-getting-started/slides/slides.pdf
https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code

# COMPONENT NOTES

-   components RETURN what you want to display, in JSX code
-   components are JUST FUNCTIONS
-   components are just functions that return HTML code
-   components are rendered as HTML elements in their parent file, or App.js file ultimately
-   if you want a component to return more than 1 element, place them all inside divs, inside ONE parent div
-   components need to have only one root element
-   when adding CSS, use className instead of class
-   hardcode dynamic data first, then use const string inserted into JSX code,
-   replace hardcoded data with curly braces inserted variables
-   the curly braces are like string templates
-   btw you can put in basic expressions between the curly braces. expressions are things that dont use an equal sign, like 1+1, or

1. hardcode the data
2. use dynamic placeholder data inserted into JSX code via curly braces and const strings
3. ultimately use realworld user data, whether via user input or fetched from somewhere

-   we can make components reusable by using parameters and something called props
-   we can pass data around via props attributes, like props.items, or props, props.whatever
-   props is just short for properties, and they are custom attributes to the object were passing around
-   data should usually be stored in parent component, App.js, and passed into child components for them to render dynamically
-   you can add dynamic attributes to the App.js components
-   if you insert the data from App.js into the rendered components, it gets PASSED to the child component itself
-   then you have to have the child component render the data from the parent component, via the props passed to it
-   so in App, it displayed the rendered component NAME, then next is the props its passing to it
-   we dont pass multiple arguments, it all gets passed as the props objects, with attributes that have values that are usable from the props object
-   the props object holds ALL the attributes and their values, usable in whatever components we are rendering and passing data to via the props object
-   the props object simply contains key value pairs
-   the keys are the attribute names in the parent component rendering the child components
-   after you dynamically pass the props object data to the child component to insert and render, you can remove the const placeholder data
-   so the main thing to remember is you name the component being rendered, then everything after that is the props object data being passed to it to be used by child
-   sometimes for clean code, use helper variables to clean up the actual rendered code, like instead of a huge long expression in between html tags, just do it above the JSX html as a few variables, aka month, day, year
-   there is no hard and fast rule when to split a component into 2 smaller components, but for me, if one displayed thing has more than a line or 2, then you can maybe split it into 2 components
-   remember when you split components, to pass props to the child component, you must set the key in the parent component
-   thats how props work, you pass the props object directly to the child component. Sometimes you an totally pass it through a child component to its child component, like App > ExpenseItem > ExpenseDate
-   remember when youre splitting your code into components, the import/exports must be right, also the return statement must contain only one element so wrap everything in a div, and you can style that div
-   look, parent element contain prop name you will use in child component as props.propname, aka you can send data to child components, whatever is in curly braces is the data, and the prop name is how its accessible in child components, ie props.items in child component is {expenses} in the parent components. the attribute in child components is whats in the curly braces in parent component

### Section 1: Getting Started

-   javascript is imperative, line by line, how everything should be
-   react is declarative, telling components the end results, and react does everything else
-   react is ui elements, components, as well as Events and Data: Props and State

### Section 2: JavaScript Refresher

-   ES7 syntax for class properties and methods is so much cleaner. no "this" keyword for properties, and just an arrow function for methods
-   also spread operator uses ... to pull in/copy array values, or object properties, while adding new values
-   Rest operators basically use ... to take in a list of args and put them into an array, upon which we can then use array methods on them. get the screenshot of this in here
-   REST operator is used in receiving arguments, ...args, for examples, then making an array of them to use array methods on
-   destructuring is different from SPREAD operator in that it spreads extracts ALL values from an array or object, whereas destructuring only pulls out the values you want, one, or 2, or 7
-   if you make a variable with the value of another variable, it will copy that value. Arrays and objects will reference that value tho. basically objects and arrays becomes instances of the original object, not copies the values. So if the original object/array values change, so do the values of the instances that copy it. to avoid instancing, and actually copy and contain the original values, use the spread operator. you always want to create a new array or object, and use spread operator to duplicate the values into a brand new array or object,
-   also array.map() creates a real duplicate, not a pointer to original, aka reference instance

### Section 3: React Basics & Working With Components

-   why components:
    -- 1) re-usability (DRY, dont repeat yourself)
    -- 2) separation of concerns, (dont do too many things in one and the same place)
    -- every file has one focus, one concern, one specific task it focuses on
-   React is about combining HTML and JS together
-   DECLARATIVE APPROACH
    -- you dont tell React that a certain HTML element should be created and inserted in a specific place
    -- instead, you define the desired end state, aka you define the target state. Let React figure out the rest
    -- React is about defining end states.
-   you need react and React-dom in the package file,
-   JSX stands for JavaScript XML
-   i love that you can just tell react what HTML components to render, and it will do the rest
-   best practice is to put 1 component into 1 file. easy peasy
-   if you end up with dozens or hundreds of files, thats fine because thats why you're using React in the 1st place, to have the quantity of components that would be overwhelming with vanillla JS/HTML
-   you end up with a component tree so to speak, all which get rendered into App.js and into the html file
-   so with Card, or wrapper containers you can accept props, and just output props.children, thats it.
-   children will always be the content between your opening and closing tags
-   however custom components like Card only support the custom styles you tell them to, so you need to set some of the children classnames onto the Card component
-   usually you can do this with setting a helper const, with the classes as a string
-   for shell containers just checkout Card, you need a helper constant to dynamically set the classnames, which

-   in the old days, you used to have to import react into every file that used react JSX, and it used to look something like this: (in App.js)
-   it used to return a react.createElement with 3 arguments,
    -- arg1 was the HTML element, if it was just a basic HTML element, then it would be a string, like "div"
    -- arg2 was an object that configures that element, specifically an object that sets all the attributes of that element. if there were no attributes, then it would be an empty object {}
    -- arg3 was the element content, what goes between the opening and closing tags. arg3 wasnt just a single argument, you can have infinite args to specify all the content you want to include in that element
    revisit section 42 for more on this. it makes sense why you need a wrapping root div for everything, because with return statements you cant return more than one thing
    return React.createElement('div', null, React.createElement('h1', null, 'Expense Tracker App'));

### Section 4: React State & Working with Events

-   handling EVENTS
-   user interaction and State
-   on all built in elements, like divs, h2s, buttons, etc, we have full access to these native DOM elements
-   so react events exposes all default events, but they all start with the word "on"
-   you add the event listener with "onClick" or onChange, or onSubmit, etc, and then assign a value of what should happen when that event happens. you assign code that executes when the click occurs
-   its an event handler prop, points to a function to execute when the event happens
-   you can create the function inline anonymously, on the fly, like {() => {console.log('hello')}} or we point it to a function previously declared
-   usually just make a clickHandler arrow function above the event handler
-   when you add an event listener just remember to capitalize the first letter of the event name, like onClick, onChange, onSubmit, etc
-   also to name the handler function, use the word "handler" in the name, is a good convention to follow
-   one way to change element values is assign them to a variable before they get inserted, then onClick, they get updated in the handler function
-   so the clickhandler variable updating method doesnt update the title, because that ccomponent is only rendered once at the beginning when react throws it all on screen
-   in order to use user input, and update DOM accordingly you use something called State
-   when the component event fires, it needs to be re-evaluated, and re-rendered with the updated data
-   by default, regular variables dont trigger that re-evaluation, the rerendering of the component. they just save the new value and nothing is done with it
-   to make React re-render a component, we import a named library from react library. we import React object, but also some named things. this re-render component thing is a function called useState
-   you have to use useState function INSIDE of the component you want to update/re-render
-   useState is a special function called a Hook, I think, and all Hooks can be identified by the fact that they use the word "use" in their name
-   useState and other Hooks must be called directly INSIDE the component you want them to update
-   useState takes 2 arguments, an initial value, which for this is going to be props.title
-   useState gives us access to the special variable as well as returns a function we can call to update the variable
-   we call the function to re-assign variable values, rather than the old way of just reassigning the variable, which doesnt trigger a re-render, aka doesnt update the UI with the new value
-   also useState is a React Hook.abs
-   also you cant use React hooks like useState inside handler functions or nested inside anything, they have to be inside the component
-   useState returns an array with 2 values, the first value is the current /variable/value, the second value is a function we can call to update the value
-   so hooks return an array, current value, and a method/function to update that value
-   we use const [] array destructuring to store both values from the
-   for the array destructuring you can use any variable names you want, but usually you want to use ones identical or similar, describing the value, arg1, and name 2 describing what the function does
-   1st element in the arrow points at the managed value, props.title or whatever youre changing
-   2nd element in the array is the function we call to set the new value and update it
-   in the handler function, the function that handles the event, the click or whatever change event, we just call the function, the element 2 in useState, and pass it the new value to set it to
-   the reason this works, and just assigning the variable in the 1st place, is because the hook, useState or whatever, is a special variable managed by React, so when you call it, it not only receives the new value, but the component function in which you call it, also gets executed again. which is very cool
-   so every time you use a hook as part of the event change handler function, the entire component gets evaluated and rendered again instantly. so cool. it draws any changes it detects compared to the previous drawing

---

-   every component receives its own instance, separate from the other components. each component has it own state, so useState is called once for each component, and manages that component instance's state
-   hooks, like useState, are on a per-component basis. one components state is independent of the other components state.
-   also why do we use the word const when using a hook? well we arent using an equal sign. by calling the state method, we just tell React to manage the variable, we never see it ourselves
-   also whats cool is everytime that component is rendered, we always get a brand new snapshot of that variable and the component everytime the component is re-evealued when we call the useState function
-   it also detects whether its the 1st time re-evaluating or just the latest time, so the initial value, although it might seem like it might be the same or something, React keeps track of that too
-   useState is simple, initial value, and a function to update the value
-   then call the function to update the value and re-render the component with the updated value
-   you also use the 1st state value, whenever you want to use that value
-   State can be updated in many ways!
-   Thus far, we update our state upon user events (e.g. upon a click).b
-   That's very common but not required for state updates! You can update states for whatever reason you may have.
-   Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.

-53

-   you can listen for user input with on{whatever} here,
-   for input you jsut add the event type, and handler function to point to to execute when that event happens
-   also the handler function needs to accept the event object as an argument
-   the most important properties of the event object are: target and value

-54

-   useState again, then in listener handler function, call the function to update state value. I wonder how this works with multiple element values, maybe use it 3 times?
-   I love that you can useState multiple times for multiple values, its great for managing a ton of shit, user input etc
-   always initialize your state initial value with an empty string, even when the input values will be a number, because everything taken in from the user is a string
-   multiple states per component is common

-55

-   there is an alternative to managing multiple states, and its kind of a personal preference
-   to manage a single state, instead of initializing it with an empty string, you can initialize it with an object, and the keys will be "enteredWhatever" followed by empty strings
-   the difference for this is when you update state, instead of updating a single state, you have to update all states
-   instructor also prefers single state slices rather than the entire object updating every time, but its personal preference.

-56

-   KEY RULE: whenever you update state, and you depend on PREVIOUS state... so here Max talks about a edge case where React doesn't update state instantly, because it schedules them, where the values could updated before the previously scheduled update is executed. and then the state snapshot is wrong. so individual state slices are better if you dont want incorrect or outdated state values
-   revisit this section if you want state updating using a single object with multiple state properties rather than separate concerns with separate state slices. remember this if you need functionality like this, with anon functions to make sure previous state stays intact

-57

-   so Max says that anything on a form, especially with a form, is triggered, especially with a submit event description, the entire form is built to fire the submit event. so you can use the form "onSubmit" event trigger
-   so part of the default submit behavior is page reloading so we use preventDefault() to stop that, because we want to manually collect and combine the user input data

-58, 2 way binding.

-   we want to clear the form here
-   with listeners, we can not just listen for values, but pass values back
-   to clear input, add the value input to the element, and set it to enteredTitle or whatever, the initial value of the state
-   then on submit, you call the state, and set it to an empty string, which sets the element value to an empty string
-   2 way binding is great for collecting data and clearing it

59,child to parent communication

-   so so far we've learned how to pass data from parent to child, but we need to learn how to pass the child collected data back to the parent
-   so THIS IS IMPORTANT. we saw how 2 way binding works, listening for changes
-   we can think about inputs as components too, not one of our components but a prebuilt component
-   onChange isn't that special, its just a property named onChange, which takes a function as a value, instead of just a value, classname, etc
-   so just like onChange is an event listener prop, to trigger functions elsewhere above it, we can make our own custom event prop, and then you assign them functions as values
-   this allows us to pass a function from a parent component to a child component and then call that function inside of the child component
-   when we call that function, we can of course pass data to that function as a parameter
-   apparently this is how we communicate up from child to parent
-   EXAMPLE 1: passing expenseData from ExpenseForm to NewExpense as a 1st step
    -- we have to pass it up one level, and then another to reach parent component, App.js ### STEP 1: PASSING PARENT FUNCTION TO CHILD
    -- step 1: passing data from ExpenseForm to NewExpense
    -- step 2: adding a new prop to ExpenseForm. basically add a new prop to parent component. name it onSaveExpenseData or whatever you want to describe the child components action. which in this case is submitting user input new expense data
    -- you can name it whatever, but make sure the name begins with "on" because then it makes it clear to React that the value for that prop is a function that eventually is triggered inside of that component
    -- okay I take that back, it doesn't have to start with "on" but its a good practice to do so because it makes it clear that the value is a function to be called inside of the child component
    -- then in the parent component, define a function that happens that the prop points to when its called
    -- so you can name the property anything really, but "on" makes it clear to YOU, that the value is a function you're calling
    -- so the parent component accepts the parameter you want from the child, in this case, enteredExpenseData. again parameter name is arbitrary, but its described what we want to collect from the child component
    -- use spread operator to copy the received parameter info, the entered data from child component into new object in parent object
    -- the child object of gathered data is usually gathered in the last handler function of that component
    -- enrich the object with an id
    -- so the function that is pointed at by the property, is passed to the child component
    -- the key is the property onSaveExpenseData is the passed VALUE, passed to the child component
    -- the pointed at function is passed to the child component, ExpenseForm ### STEP 2: USING THE PASSED FUNCTION IN CHILD COMPONENT
    -- in child component you can expect the onSaveExpenseData prop, because we set it, when we use the child component, in this case ExpenseForm
    -- need to extract the value of that pass prop, ie, the function
    -- IN CHILD COMPONENT, YOU are receiving props now, which includes the onSaveExpenseData, called props.onSaveExpenseData in the child component
    -- so in child component instead of logging gathered expense data, it executes the handler passed from the parent, passing it the data gathered from child component
    -- so youre able to pass functions and execute them in a different component
    -- passing parent handler functions to child functions to execute and pass them data is how you can communicate between components and pass data UP
    -- the trick is passing around a pointer at a functions, and accessing via props.pointedAtFunction

    ### STEP 3: communicating up AGAIN, from parent component to its parent, App.js

    -- in App.js add a handler function
    -- then a property name to point to handler function, name should hopefully describe whats happening, aka, onAddExpense

    -60, lifting state up
    -- we cant communicate between sibling components, we can communicate between parent and child components, child to parent, then parent to another child, like NewExpense to App, then App to Expenses

    -   everything we just learned, passing parent handler functions to child components, child calling that function and passing it data, is "lifting state up"
    -   it doesnt mean you have to lift state all the way up, just to the first available parent component that has access to sibling component
    -   lift your state as high as necessary in your component tree until you find a component that has access to the component you want to pass that state too
    -   you can pass multiple props to child components!!

    -   61
        using 2 way binding to pass values from parent to child and control the child values, is
        Section 4 finished

### Section 5: Rendering Lists & Conditional Content

-   64
-   array.map takes a function and executes that function on every element in the array
-   we take each array element and return the JSX component we want to return for each element
    -65
    if we need to save state and need previous state, we can use a function to return the previous state and then add the new state item to the array
    -66
    right now its adding the new item, adding it to the bottom, then re-rendering the entire list to the DOM, with the new item at the top - this is bad because if the state list items are stateful, its going to cause errors because it will cause top or bottom items to be overwritten - React works like this because all it does is check the current array length, and then it renders the list, and then it checks the new array length, and if the length is different, it re-renders the list - it does this when all the items look alike - to change this, we go to where React renders all our expenses in Expenses.js, and add a special "key" prop alongside the other props - the key is special because it helps React identify each item as different - you can use any primitive data type as a unique identifier, but usually its a string - so the list item id key is very important it allows React to know where to place new items, not just render everything
    -67 - if we filter our expenses by year and have nothing to show, we might want to conditionally show the user a message saying there are no expenses for that year - you can write an inline ternary expression to display a message if no expenses, otherwise display the expenses - another trick about javascript is, if with the ternary operator, if you use a ternary operator with an && operator, it will return the part AFTER the AND operator if the 1st condition is met - you see this in the filteredExpenses.length couple of lines - if the double ternary expressions are too much logic to fit into the JSX code, then - the less logic you include in your return JSX code, the more readable it is, I much prefer this method. Its great. - lean JSX snippets are much better
    -68
    actually lets extract this entire logic component into a different component, make the Expenses component a little bit leaner - it doesnt really matter how much your component has, have it do one thing, return one thing or another, have it return one thing, whatever flavor of that thing you want
    ASSIGNMENT 1. make form small initially, then make it bigger when user clicks on the add expense button 2. add Cancel button
    to do this, basically add both components to be displayed - then use state to control which component is displayed
    Section 5 done https://github.com/academind/react-complete-guide-code/tree/05-rendering-lists-conditional-content

### Section 6: Styling React Components

May-5-22, Thu, 228PM started

### Section 7: Debugging React Apps

### Section 8: Time to Practice: A Complete Practice Project

### Section 9: Diving Deeper: Working with Fragments, Portals & ""Refs"""

### Section 10: Advanced: Handling Side Effects, Using Reducers & Using the Context API

### Section 11: Practice Project: Building a Food Order App

### Section 12: A Look Behind The Scenes Of React & Optimization Techniques

### Section 13: An Alternative Way Of Building Components: Class-based Components

### Section 14: Sending Http Requests (e.g. Connecting to a Database)

### Section 15: Building Custom React Hooks

### Section 16: Working with Forms & User Input

### Section 17: Practice Project: Adding Http & Forms To The Food Order App

### Section 18: Diving into Redux (An Alternative To The Context API)

### Section 19: Advanced Redux

### Section 20: Building a Multi-Page SPA with React Router

### Section 21: Deploying React Apps

### Section 22: Adding Authentication To React Apps

### Section 23: A (Pretty Deep Dive) Introduction to Next.js

### Section 24: Animating React Apps

### Section 25: Replacing Redux with React Hooks

### Section 26: Testing React Apps (Unit Tests)

### Section 27: React + TypeScript

### Section 28: Optional: React Hooks Introduction & Summary

### Section 29: Optional: React Summary & Core Feature Walkthrough

### Section 30: Course Roundup

### Section 31: This Course Got Updated!
