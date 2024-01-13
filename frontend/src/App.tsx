import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from './component/landing'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxgqRs5vZTc80p0G2eFvwPDQSych4Gaas",
  authDomain: "leetcode-clone-e5ddf.firebaseapp.com",
  projectId: "leetcode-clone-e5ddf",
  storageBucket: "leetcode-clone-e5ddf.appspot.com",
  messagingSenderId: "13794132241",
  appId: "1:13794132241:web:877ee209e3f942f7f0ccb0",
  measurementId: "G-C6ZQ9EHBX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  

  return (
    <div>
      <Landing />
        
    </div>
  )
}

export default App
