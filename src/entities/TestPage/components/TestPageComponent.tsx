import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updatedArray = useMemo(() => {
    return someArray.map((num) => {
      console.log('Hello');
      return num + 10;
    });
  }, [someArray]);

  // componentDidMount
  useEffect(() => {
    console.log('Component showed');
  }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('Component updated');
  // });

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('Counter updated');
  // }, [counter]);

  // useEffect(() => {
  //   console.log('SomeArray updated');
  // }, [someArray]);

  // // componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('Component was deleted');
  //   };
  // }, []);

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increase counter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Add number in array
      </button>
      {updatedArray.map((num, index) => {
        return <div key={`key:${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
