import React, { useEffect, useState } from 'react'

const WindowSizeChanger = () => {
    let [size,setSize]=useState(window.innerWidth);
    const Checksize=()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        console.log("hii");
        window.addEventListener('resize',Checksize);
        return ()=>{
            console.log("remove");
            window.removeEventListener('resize',Checksize);
        }
    },[])
  return (
    <div>
    <div className='container d-flex flex-column align-items-center'>
    <h1>Window</h1>
    <h2>{size}</h2>  
    </div>
    </div>
  )
}

export default WindowSizeChanger
