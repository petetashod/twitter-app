import { useState } from 'react'
import './App.css'
import NavBar from'./Front-End/NavBar'
import Search from './Front-End/Search'
import FavTweets from './Front-End/FavTweets';
import Home from './Front-End/Home';


function App() {
 let component;

  switch (window.location.pathname) {
    
    case"/Home":
    component = <Home/>
      break
    case "/Search":
    component = <Search />
      break
    case "/FavTweets":
    component = <FavTweets />
      break
  }
  return (
    <>
    
      <NavBar />
      {component}
      
     
    </>
  )
}

export default App
