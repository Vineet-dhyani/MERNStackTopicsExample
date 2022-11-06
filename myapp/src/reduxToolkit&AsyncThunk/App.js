import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import React from 'react'
import {getPosts} from "./features/postSlice"

const App = () => {
    const {posts,loading}=useSelector((state)=>state.post)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[])
  return (
    <div>
      {posts.map((item)=>{
        <h2>{item.title}</h2>
      })}
    </div>
  )
}

export default App
