import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constants';
import { IUsers } from '../../interfaces/IUsers';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUsersPage] = useState<IUsers[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(usersUrl)
        .then((response) => response.json())
        .then((data) => setUsersPage(data));
    }, 1500);
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
