import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjv9JNtOze-LYBRyM3bot52xNNTuQxG-E",
  authDomain: "fir-reactcoder.firebaseapp.com",
  projectId: "fir-reactcoder",
  storageBucket: "fir-reactcoder.appspot.com",
  messagingSenderId: "1053957198158",
  appId: "1:1053957198158:web:d70841f21008ad0a0e8e1f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


