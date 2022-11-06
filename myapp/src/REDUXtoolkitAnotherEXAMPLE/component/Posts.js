import React from 'react'
import { useState } from 'react'
import { getPost } from '../redux/features/Postslice';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
const Posts = () => {
    const [id,setId]=useState();
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const {loading,post}=useSelector(state=>({...state.app}))

    const handleFetchData=(e)=>{
     e.preventDefault();
     if(!id){
        window.alert("provide id");
     }
     else{
     dispatch(getPost({id}))
     setId("");
     }
    }
  return (
    <div>
     <form>
        <label htmlFor='userid'>search by id</label>
        <input value={id} onChange={(e)=>setId(e.target.value)} id="userid" placeholder='enter id' type="number"/>
      <button onClick={handleFetchData} type='submit'>fetch posts</button>
      <button onClick={()=>navigate("/createpost")} type='submit'>create posts</button>
     </form>
     <div>
        {
            post.length >0 &&(
            
                <div>
                <span>{ post[0].title}</span>
              <div>{post[0].body}</div>
                </div>
            )
          
        }
     </div>
    </div>
  )
}

export default Posts
