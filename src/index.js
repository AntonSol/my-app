import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts=[
  {id:0, message:'Hi are you? ', like:12},
  {id:1, message:'Its my first post ', like:1},
  {id:2, message:'YOU ', like:15},
]
//------------------------------------
let dialogsData=[
  {id:0,name:'Toha'},
  {id:1,name:'Biba'},
  {id:2,name:'Trololo'},
]
let messagesData=[
  {id:0,message:'Hi'},
  {id:1,message:'I am Anton'},
  {id:2,message:'QQ'},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
