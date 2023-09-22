import { useState } from 'react'
import './App.css'
import NavBar from'./Front-End/NavBar'


function App() {
 

  return (
    <>
    
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
