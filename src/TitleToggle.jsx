import React, { useEffect, useState } from 'react';

const TitleToggle = () => {
  const [count, setCount] = useState(0);

  // Update document title whenever count changes
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div style={{ padding: '20px', fontSize: '18px' }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default TitleToggle;
