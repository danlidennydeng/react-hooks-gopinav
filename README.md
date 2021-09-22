React Hooks by codevolution

What are Hooks?

Hooks are new feature addition in React version 16.8 which allow you to use React feature without having to write a class.

Ex: State of a component

Hooks do not work inside classes

https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=1
https://github.com/gopinav/React-Tutorials/tree/master/React%20Hooks

Why use Hooks?

Number 1:
Understand how "this" keyword works in Javascript is different from other programming languages.
Remember to bind event handlers in class components
Classes don't minify very well and make hot reloading very unreliable.

Number 2:
There is no particular way to reuse stateful component logic
HOC (Higher Order Component) and render props patterns do address this problem but
Makes the code harder to follow
There is a need to share stateful logic in a better

Number 3:
Create components for complex scenarios such data fetching and subscribing to events
Related code is not organized in one place
Ex: Data fetching - In componentDidMount, componentDidUpdate
Ex: Event listenners - In componetDidMount and componentWillUnmount
Because of stateful logic - Cannot break components into smaller ones

Noteworthy Points

React version 16.8 or higher
* Completely opt in
* Hooks don't contain any breaking changes and the release is 100% backwards-compatible
* Classes won't be removed from React
* Can't use Hooks inside of a class component
* Hooks don't replace your existing knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know

Summary

Hooks are new feature addition in React version 16.8
They allow you to use React features without having to write a class
Avoid the whole confusion with 'this' keyword
Allow you to reuse stateful logic
Organize the logic inside a component into reusable isolated units

Rules of Hooks

"Only call Hooks at the Top Level"
Don't call Hooks inside loops, conditions, or nested functions

"Only call Hooks from React functions"
Call them from within React functional components and not just any regular JavaScript function.

Summary - useState

* the useState hook let you add state to functional components
* in classes, the state is always an object
* with the useState hook, the state does not have to be an object.
* the useState hook returns an array with 2 elements.
* the first element is the current value of the state, and the second element is a state setter function.
* new state value depends on the previous state value? You can pass a function to the setter function
* when dealing with objects or arrays, always make sure to spread your state vaiable and then call the setter function