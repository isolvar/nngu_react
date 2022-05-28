import React from 'react';
import './assets/scss/normalize.scss';
import TestPage from './entities/TestPage';
import UsersPage from './entities/UsersPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      {/* <UsersPage /> */}
      <TestPage />
    </PageLayout>
  );
};

export default App;
