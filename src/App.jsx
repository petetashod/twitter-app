import { useState } from 'react'
import './App.css'
import NavBar from'./Front-End/NavBar'
import Search from './Front-End/Search'
import FavTweets from './Front-End/FavTweets';


function App() {
 let component;

  switch (window.location.pathname) {
    
    case"/Home":
    component = <App />
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
    {component}
      <NavBar />
     
      <h1> Twitter App</h1>

      <div>
        <p className='appDescription lead'>
          An app that allows you to see what your favorite people are talking about.<br/>
          In addition you can like or search for your favorite celebrities.
        </p>
      </div>
     
    </>
  )
}

export default App
