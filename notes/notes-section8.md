-   anytime you work with JSX arrays, you need a key for them

-   the keys can be added as a value to every JSX element in their opening tag
-   usually you dont do this cuz its cumbersome and you just wrap everything in a div
-   it doesn't have to a div, but it can be any element
-   the problem can occur when you have "div soup", where you have many nested divs
-   now were making a Wrapper.js to hold everything, all the JSX elements
-   React.Fragment does the same thing as Wrapper does, apparently
-   instead of React.fragment, you can also wrap things in empty opening and closing tags, ie <></>
-   this last method is great because it continually removes unnecessary divs in the DOM rendered content instead of a tree of divs
-   you can always use React.fragment or the empty tags
-   React Portals are great for overlays, modals, etc.
-   Portals allow you to use JSX to render nested elements, somewhere else on the page, higher up on the element tree, perhaps outside the JSX element you wrote it in
-   with portals, you can have overlays like modals, as a direct child to the body element, which is exactly what I was trying to do with Warp
-   portals need 2 things: 1 place you want the portal to go, and then something inside that element that tells it what portal to go to
-   1. mark the destination in the main html file, right below the opening body tag, mark your divs id, like overlay-root, or modal-root, etc
-   2. in the JSX component file, make a JSX component that returns just what you want, as a named Component, like Backdrop, or Modal, Overlay, etc.
-   react-dom library is the one you need for portals
-   react-dom is actually the browser adapter package for React, whereas other packages like react-native are adapters/wrappers for mobile apps
-   import Reactdom and then between the fragment tags, use the createPortal method
-   then it takes 2 args, the first is the JSX element you want to render, and the second is the destination element
-   portals can be used anywhere you use JSX code

# refs

-   refs, short for references, are quite powerful and used often
-   refs basically allow us to get access to other dom elements and work with them
-   in AddUser, with every keystroke we save the state and update it
-   so instead of updating on every keystroke, Max wants to update only on user form submission
-   1. import useRef
-   the cool thing about refs, is by attaching the ref to an input element, we can read the value of the input on submit, rather than logging every keystroke
-   if you use refs, sometimes you can just get rid of state, like for user name and age
-   and you can get rid of handler functions too, like the usernameChange and age change handlers
-   you can also get rid of the value and pointer props in the elements themselves, so for input fields, refs are actually extremely useful
-   the only drawback with using refs for input fields is you lose the ability to reset the input fields state, but you can do this by manipulating the dom input fields directly
-   normally you shoudnt manip the dom directly, but with input fields and refs, its ok to do it here
-   so for just reading values, refs are great, but you have to directly manipulate the dom, whereas with state, its cleaner, but more code

# 107

-   accessing stuff with refs, those elements are called uncontrolled components, because they use no state
-   they are called uncontrolled because they have no state that is not controlled by React. its like half React features used, where you use React to fetch data, but not set/update it
