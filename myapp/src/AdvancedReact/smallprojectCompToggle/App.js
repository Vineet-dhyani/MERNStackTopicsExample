import React, { useState } from 'react'
import Todos from './Todos';
import WindowSizeChanger from './WindowSizeChanger';


const App = () => {
    let [switchIt,setSwitch]=useState(true);
    
  return (
    <>
    <button onClick={()=>{
        setSwitch(!switchIt);
    }} className="btn btn-success">Toggle</button>
    {switchIt? <Todos/>:<WindowSizeChanger/>}
    </>
  )
}

export default App
