import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import { createUserAction } from '../../../store/pages/UsersPage/actions';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const dispatch = useDispatch();

  const { search } = useLocation();
  const currentPageNumber = new URLSearchParams(search).get('page');

  const pagginatedUserData = usersDataAttr.slice(
    (Number(currentPageNumber) - 1) * 3,
    Number(currentPageNumber) * 3
  );

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      id: usersDataAttr.length + 1,
      name: nameValue,
      email: emailValue,
    };

    dispatch(createUserAction(newUser));
  };

  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {pagginatedUserData.length ? (
          pagginatedUserData.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
      </div>

      <Pagination limit={3} itemsAmount={usersDataAttr.length} />

      <hr />

      <form className={style.create_user__form_wrapper} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Введите имя"
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Введите Email"
          value={emailValue}
          onChange={(event) => {
            setEmailValue(event.target.value);
          }}
        />
        <button type="submit">Создать пользователя</button>
      </form>
    </div>
  );
};

export default UsersPageComponent;
