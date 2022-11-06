import React, { useState } from "react";


const Title=()=>{
// let title="Random Title";
let [title,setTitle]=useState("Random Title");
return(
    <h1 onClick={(e)=>{
        console.log(title);
        if(title==="Random Title"){
            setTitle("title changed");
        }
       else{
        setTitle("Random Title");
       }
    }}>{title}</h1>
);

};
export default Title;