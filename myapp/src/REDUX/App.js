import React from 'react'
import Header from './components/Header'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
 
const App = () => {
  return (
   < BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductListing></ProductListing>}></Route>
       <Route path='/product/productID' element={<ProductDetail></ProductDetail>}></Route>
      <Route path='*' element={<div>NOt found</div>}></Route>
      
    </Routes>
  </BrowserRouter>
)
     
    
  
}

export default App
