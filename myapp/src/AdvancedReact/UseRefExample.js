import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
    let [count,setName]=useState("");
    let counterRender=useRef(0);
    let inputRefernce=useRef("");
    useEffect(()=>{
        console.log(counterRender,inputRefernce);
        inputRefernce.current.focus();
        counterRender.current=counterRender.current+1;
    })
  return (
    <div>
      <h1>count:{counterRender.current}</h1>
      <form className='form' onSubmit={(e)=>{
        e.preventDefault();
        console.log(inputRefernce.current.value);
      }}>
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            <input tpe="text" ref={inputRefernce}/>
        </div>
       <button className="btn btn-primary">add</button>
      </form>
    </div>
  )
}

export default UseRefExample
