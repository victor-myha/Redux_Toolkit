import React from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import styles from './App.module.scss';

const App = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <h1>USERS PAGE</h1>
        <UsersList />
      </div>

      <div className={styles.rightColumn}>
        <AddUser />
      </div>
    </div>
  );
};

export default App;
