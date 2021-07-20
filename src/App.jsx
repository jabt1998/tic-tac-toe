import logo from './logo.svg';
import Square from './component/Square';
import Board from './component/Board';
import { useState } from 'react';
import styles from './App.module.scss'

function App() {

  return (
    <div className={styles.page}>
      <Square />
    </div>
  );
}

export default App;
