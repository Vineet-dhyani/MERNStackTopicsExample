import { memo } from "react"
import React from 'react'


const ChildA = ({myfunc}) => {
   
console.log("child element");
  return (
    <div>
    
    </div>
  )
}

export default memo(ChildA)
