import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '20px 0' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
