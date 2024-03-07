
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { updateNewPostText} from './State';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree=(state)=>{
root.render(
  <React.StrictMode>
    <App state={store.state} addPost={store._addPost} updateNewPostText={store._updateNewPostText}/>
  </React.StrictMode>
);}


renderEntireTree(store.state)
subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
