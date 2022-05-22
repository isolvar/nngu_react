import React from 'react';
import './assets/scss/normalize.scss';
import UsersPage from './entities/UsersPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <UsersPage />
    </PageLayout>
  );
};

export default App;
