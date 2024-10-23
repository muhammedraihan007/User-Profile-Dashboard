import React from 'react';
import './App.css';
import Header from './components/header';
import UserProfile from './components/UserProfile';
import UserPosts from './components/UserPosts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile />
      <UserPosts />
      <Footer />
      
    </div>
  );
}

export default App;
