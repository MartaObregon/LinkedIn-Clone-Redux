import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  //persistent login 
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoURL
        }))
      }else{
        dispatch(logout())
      }
    })
  }, [])


  
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
