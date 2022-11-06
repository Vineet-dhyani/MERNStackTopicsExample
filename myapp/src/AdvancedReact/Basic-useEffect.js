import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
let [value,setValue]=useState(0);
console.log("normal hii");
useEffect(()=>{
console.log("effect hii");
document.title=`(${value}) New Message`;
},[value])
  return (
    <div>
    <h1>Basic effect</h1>
    <button  onClick={()=>{
        setValue(value+1);
    }} className="btn btn-primary"></button>
    </div>
  )
}

export default BasicEffect;
