import React, { useEffect, useState } from 'react'

let url="https://api.github.com/users";
const MultipleReturn = () => {
   let [isLoading,setLoading]=useState(true);
   let [isError,setError]=useState(false);
   let [data,setData]=useState([]);

   useEffect(()=>{
      fetch(url).then((response)=>{
        if(response.status>=200&&response.status<=300){
          return response.json();
        }
        throw new Error(response.status+"error occured");
     } )
      .then((details)=>{
        
        console.log(details);
        setLoading(false);
      details.forEach(element => {
        setData(element.login); 
        });
        
      })
      .catch((e)=>{
        console.log(e);
        setLoading(false);
        setError(true);
      })
   },[]);
   if(isLoading){
    return(
        <div>
            <h1>Loading....</h1>
        </div>
    )
   } 
   if(isError){
    return(
        <div>
            <h1>Error....</h1>
        </div>
    )
   }
 
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
   
   
  
}

export default MultipleReturn;
