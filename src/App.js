import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Test from './components/Test';

function App() {
  return (
    <div className='app-wrapper'>
     <Header/> 
     <Navbar/>
     <Profile/>
     <Test/>
    </div>
  );
}

export default App;
