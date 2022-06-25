import React from 'react';
import NestedChild from './NestedChild';

const ChildOne = () => {
  return (
    <div>
      <div>ChildOne</div>
      <NestedChild />
    </div>
  );
};

export default ChildOne;
