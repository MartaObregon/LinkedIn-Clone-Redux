import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
     
      <Header/>
      {/* Header */}
      {/* App Body */}
      <div className="app_body">
        <Sidebar/>
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}

    </div>
  );
}

export default App;
