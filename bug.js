This error occurs when using the `useEffect` hook in React Native with a dependency array that includes a function.  Because functions are compared by reference, React Native will treat them as different values even if their logic is identical, triggering unnecessary re-renders.

```javascript
useEffect(() => {
  const fetchData = async () => {
    // ... fetching data
  };
  fetchData();
}, [fetchData]); // This will cause an infinite loop
```