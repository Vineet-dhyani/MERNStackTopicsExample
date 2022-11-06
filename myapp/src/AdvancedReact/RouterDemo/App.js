import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Error from './Error'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>App</div>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
