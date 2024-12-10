# React Native useEffect Infinite Loop with Function Dependency

This repository demonstrates a common error in React Native where using a function directly within the dependency array of `useEffect` hook leads to infinite re-renders. This occurs because functions are compared by reference, not by value.  Each render creates a new function instance, triggering an infinite loop.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides the solution using `useCallback`.