import React from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import ItemsList from '../ItemsList';
// import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <MainLayout>
      <ItemsList />
    </MainLayout>
  );
};

export default MainPage;
