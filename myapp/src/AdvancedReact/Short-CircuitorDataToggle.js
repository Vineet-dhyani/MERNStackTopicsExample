import React, { useState } from 'react'

const ShortCircuit = () => {
    let [value,setValue]=useState("");
    let [isError,setIsError]=useState(false);
  return (
    <>
    <div>
      <h1>{value||"hello world"}</h1>
    </div>
    <div>
        <h1>{!isError?"there is no error":"there is error"}</h1>
    </div>
    <button onClick={()=>{setIsError(!isError)}}>show/hide</button>
    </>
  )
}

export default ShortCircuit;
