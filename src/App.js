import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/home/Home';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;
