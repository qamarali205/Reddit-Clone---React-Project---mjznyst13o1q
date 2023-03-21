import React, { useState } from 'react'
import '../styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Landing from './landing/Landing';
 import Header from './header/Header';
 import Post from './post/Post';
//  import { DataContextProvider } from './context/DataContext';
import Footer from './footer/Footer';
import LoginForm from './LoginForm';
// import { DataProvider } from './PostContext';

const App = () => {
  
  return (
    <div id="main">
     
      <Header />
      <Post />
      
      
      
      {/* <LoginForm />
      <Footer /> */}
      {/* <Landing /> */}
    </div>
  )
}


export default App;
