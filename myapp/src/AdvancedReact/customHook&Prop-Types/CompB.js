import React from 'react'
import UseFetch from './UseFetch'

const CompB = () => {
const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
        <h1>This is List of Title</h1>
        <ul>
        {data&&data.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
        </ul>
    </div>
  )
}

export default CompB
