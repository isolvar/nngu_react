import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './UseRef.module.scss';

const UseRef = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     console.log(inputRef);
  //   }, []);

  //   const handleBtnClick = () => {
  //     // inputRef.current?.focus();
  //     if (inputRef.current) {
  //       inputRef.current.style.color = 'red';
  //     }
  //   };

  //   return (
  //     <div>
  //       <input type="text" ref={inputRef} />
  //       <button type="button" onClick={handleBtnClick}>
  //         Focus
  //       </button>
  //     </div>
  //   );

  // ============ Example 2 ===============================
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const ulRef = useRef<HTMLUListElement>(null);
  const numberRef = useRef<number[]>(number);

  const handleAddNum = () => {
    setNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  numberRef.current = number;

  //   const handleScroll = useCallback(() => console.log('Scroll'), []);
  const handleScroll = () => console.log('Скролл!', numberRef.current);
  const memoizedHandleScroll = useCallback(handleScroll, []);

  const handleSub = () => {
    ulRef.current?.addEventListener('scroll', memoizedHandleScroll);
  };

  const handleUnSub = () => {
    ulRef.current?.removeEventListener('scroll', memoizedHandleScroll);
  };

  return (
    <div>
      <div className={style.btns_wrapper}>
        <button type="button" onClick={handleAddNum}>
          Add Number
        </button>
        <button type="button" onClick={handleSub}>
          Sub on scroll
        </button>
        <button type="button" onClick={handleUnSub}>
          Unsub from scroll
        </button>
      </div>
      <ul ref={ulRef} className={style.number_list}>
        {number.map((num, i) => (
          <li className={style.number_item} key={`${num + 1}`}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseRef;
