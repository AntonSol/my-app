import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Profile/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-cont'>
        <Routes>
        <Route path='/messages' element={<Dialogs/>} />
        <Route path='/profile' element={<Profile/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
