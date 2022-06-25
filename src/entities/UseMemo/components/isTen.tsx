import React, { FC, memo, useMemo } from 'react';

interface IProps {
  value: number;
}

const IsTen: FC<IProps> = ({ value }) => {
  console.log('IsTen rerendered');

  const loop = () => {
    let i = 0;
    while (i < 800000000) i++;
  };

  const isTen = () => {
    // let i = 0;
    // while (i < 800000000) i++;
    return value === 10 ? 'Value equal 10' : 'Value not equal 10';
  };

  useMemo(loop, [isTen()]);

  return <div>{isTen()}</div>;
};

export default memo(IsTen);
