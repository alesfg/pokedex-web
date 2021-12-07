import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { Navbar, Dashboard } from './components/';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
