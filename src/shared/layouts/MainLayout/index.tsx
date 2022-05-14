import React, { FC } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import style from './MainLayout.module.scss';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
