```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // This will log multiple times
    return () => {
      // Cleanup function - this won't fix the infinite loop
      console.log('Cleanup');
    };
  }, [count]); // Missing dependency array or incorrect dependency

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```