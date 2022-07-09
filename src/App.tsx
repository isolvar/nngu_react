import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import UsersPage from 'entities/UsersPage';
import MainLayout from 'layouts/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users_page" element={<UsersPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
