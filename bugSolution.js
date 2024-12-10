The solution is to memoize the function using `useCallback` from `react`. This ensures that the function reference remains consistent across renders unless its dependencies change.

```javascript
import React, { useState, useEffect, useCallback } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    // ... fetching data
    // setData(fetchedData);
  }, []); // Empty dependency array means fetchData is memoized

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View>
      {/* ... JSX to display data ... */}
    </View>
  );
};

export default MyComponent;
```