import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Dashboard from './page/Dashboard';
import Meetups from './page/Meetups';


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Dashboard />
      <Meetups />
    </div>
  );
}

export default App;
