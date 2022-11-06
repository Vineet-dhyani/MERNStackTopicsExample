import React, { useState} from 'react'

const Counter = () => {
    let [value,setValue]=useState(0);
    let [Complexvalue,setComplexvalue]=useState(0);
  return (<>
    <div className="container d-flex align-items-center flex-column">
      <h1>Counter</h1>
      <h2>{value}</h2>
    </div>
    <div className='container d-flex justify-content-center'>
        <button onClick={()=>{setValue(value--)}} className='btn btn-success  mx-3'>-</button>
        <button onClick={()=>{setValue(value++)}} className='btn btn-danger mx-3'>+</button>
    </div>
    <br/><br/><br/>
    <div className="container d-flex align-items-center flex-column">
      <h1>Complex Counter</h1>
      <h2>{Complexvalue}</h2>
    </div>
    <div className='container d-flex justify-content-center'>
        <button onClick={()=>{
            setTimeout(() => {
                console.log("hii--");
             setComplexvalue((prevValue)=>{
                return prevValue-1;
             });
            }, 2000);
            }} className='btn btn-success  mx-3'>-</button>
        <button onClick={()=>{
            console.log("hii++");
            setTimeout(() => {
                setComplexvalue((prevValue)=>{
                    return prevValue+1;  
                })  
            },2000);
           }} className='btn btn-danger mx-3'>+</button>
    </div>


    </>
  )
}

export default Counter;
