import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from '../Layout/Navbar'
import Error from './Error'
import AddUser from '../users/AddUser'
import EditUser from '../users/EditUser'
import User from '../users/User'
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route   exact path='/' element={<Home></Home>} ></Route>
      <Route  exact path='/About' element={<About></About>} ></Route>
      <Route  exact path='/Contact' element={<Contact></Contact>} ></Route>
      <Route  exact path='/user/add' element={<AddUser></AddUser>} ></Route>
      <Route  exact path='/users/edit/:id' element={<EditUser></EditUser>} ></Route>
      <Route  exact path='/users/:id' element={<User></User>} ></Route>
      <Route  exact path='*' element={<Error></Error>} ></Route>
       
    </Routes>
    </BrowserRouter>
  )
}

export default App
