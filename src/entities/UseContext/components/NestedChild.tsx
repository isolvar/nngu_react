import React, { useContext } from 'react';
import { UsersContext } from '../context';

const NestedChild = () => {
  const data = useContext(UsersContext);
  console.log(data);
  return <div>nested</div>;
};

export default NestedChild;
