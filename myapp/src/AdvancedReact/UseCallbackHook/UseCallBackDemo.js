import React, { useCallback, useState } from 'react'
import ChildA from './ChildA';

const UseCallBackDemo = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    const myFunc=useCallback(()=>{
      //some code here
      return ()=>{
        
      }
    },[count1]);
 
  return (
    <>
    <div>
      <button onClick={()=>{setCount(count+1)}} className="btn btn-success">InC</button>
     <p>{count}</p>
      <ChildA myFunc={myFunc}/>
      <button onClick={()=>{setCount1(count1+1)}} className="btn btn-success">InCrease</button>
     <p>{count1}</p>
    </div>
    </>
  )
}



export default UseCallBackDemo
