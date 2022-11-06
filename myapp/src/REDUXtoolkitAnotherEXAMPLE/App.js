import React from 'react'
import { Route,Router ,Routes} from 'react-router-dom'
import CreatePosts from './component/CreatePosts'
import Posts from './component/Posts'
const App = () => {
  return (
    <>
    <Routes>

            <Route path='/' element={<Posts></Posts>}/>
            <Route path='/create' element={<CreatePosts></CreatePosts>}/>
       
    </Routes>
    </>
  )
}

export default App
