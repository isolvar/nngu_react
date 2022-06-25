import { createContext } from 'react';

export const myUsers = [
  {
    id: 1,
    name: 'Vasya',
  },
  {
    id: 2,
    name: 'Petya',
  },
  {
    id: 3,
    name: 'Masha',
  },
];

export const UsersContext = createContext(myUsers);
