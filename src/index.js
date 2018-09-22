import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBpr2qxt8HOj0YfMoNh6bHRb0kEUwxFRQQ",
  authDomain: "pseudogram-f1689.firebaseapp.com",
  databaseURL: "https://pseudogram-f1689.firebaseio.com",
  projectId: "pseudogram-f1689",
  storageBucket: "pseudogram-f1689.appspot.com",
  messagingSenderId: "1033743806042"
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
