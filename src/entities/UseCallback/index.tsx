import React, { useCallback, useState } from 'react';
import ChildComponent from './components/ChildComponent';

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrease = useCallback(() => setCounter((prev) => prev - 1), []);

  return (
    <div>
      <div>{counter}</div>
      <ChildComponent decrease={decrease} increase={increase} />
    </div>
  );
};

export default UseCallBack;
