import React, { FC } from 'react';
import style from '../UsersPage.module.scss';

interface IProps {
  name: string;
  email: string;
}

const UserCard: FC<IProps> = ({ name, email }) => {
  return (
    <div className={style.user_card}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
