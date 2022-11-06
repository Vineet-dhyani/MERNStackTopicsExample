import React from 'react'
let data=[
    {id:1,name:"vineet"},
    {id:2,name:"aman"},
    {id:3,name:"bipul"}
];


 const DisplayList = () =>{
  return (
    <div>
      <ul>
        {
        data.map((detail)=>{
          return <h3 key={detail.id}>{detail.name}</h3>  
         })
        }
      </ul>
    </div>
  )
};
export default DisplayList;

