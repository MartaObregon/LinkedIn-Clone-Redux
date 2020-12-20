import React from 'react';
import {useSelector} from 'react-redux'

import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';

function App() {

  const user = useSelector(selectUser)
  return (
    <div className="app">
     
      <Header/>
      {!user? (
        <Login/>
       ): ( 
         <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>)
      }
     
      
      
      {/* Widgets */}

    </div>
  );
}

export default App;
