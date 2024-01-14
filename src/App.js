import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Profile/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import News from './components/Profile/News/News';
import Settings from './components/Profile/Settings/Settings';
import Musik from './components/Profile/Musik/Musik';

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-cont'>
        <Routes>
        <Route path='/news' element={<News/>}/>
        <Route path='/messages' element={<Dialogs/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/musik' element={<Musik/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
