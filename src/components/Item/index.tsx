import React, { FC } from 'react';
import style from './Item.module.scss';

interface IItem {
  name: string;
  description: string;
}

const Item: FC<IItem> = (props) => {
  const { name, description } = props;

  return (
    <div className={style.item_container}>
      <p>{name}</p>
      <p>Описание:</p>
      <p>{description}</p>
    </div>
  );
};

export default Item;
