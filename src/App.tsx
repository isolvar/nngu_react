import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import TestPage from './entities/TestPage';
import TodosPage from './entities/TodosPage';
import UseCallBack from './entities/UseCallback';
import UseContex from './entities/UseContext';
import UseMemo from './entities/UseMemo';
import UseRef from './entities/UseRef';
import UsersPage from './entities/UsersPage';
import UserComponent from './entities/UsersPage/components/UserComponent';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="users_page" element={<UsersPage />} />
        <Route path="users_page/:id" element={<UserComponent />} />
        <Route path="test_page" element={<TestPage />} />
        <Route path="todos_page" element={<TodosPage />} />
        <Route path="use_ref" element={<UseRef />} />
        <Route path="use_callback" element={<UseCallBack />} />
        <Route path="use_memo" element={<UseMemo />} />
        <Route path="use_contex" element={<UseContex />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
