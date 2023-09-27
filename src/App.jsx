import { useState } from 'react'
import './App.css'
import NavBar from'./Front-End/NavBar'
import Search from './Front-End/Search'
import FavTweets from './Front-End/FavTweets';
import Home from './Front-End/Home';
import {Route, Routes} from 'react-router-dom'

function App() {
 
  
  return (
    <>
    
      <NavBar />
    
      <Routes>
        <Route path='/Home' element={ <Home />}/>
        <Route path='/Search' element={ <Search />}/>
        <Route path='/FavTweets' element={ <FavTweets />}/>

      </Routes>
      
     
    </>
  )
}

export default App
