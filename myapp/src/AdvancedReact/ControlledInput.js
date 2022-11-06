import React, { useState } from 'react'

const ControlledInput = () => {
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [person,setPerson]=useState([]);
    let duplicate=false;
    const handlesubmit=(e)=>{
        e.preventDefault();
        let newpeople={name,email,id:new Date().getTime().toString()};
        for(let i in person){
            if(person[i].email===newpeople.email){
                setEmail("");
                setName("");
                console.log("duplicate");
                duplicate=true;
            }
            else{
              duplicate=false;
            }
        }
        if(!duplicate){
            if(name&&email){
            setPerson((prevPerson)=>{
                return [...prevPerson,newpeople];
            })
        }
        }
    }
  return (
    <div className='container'>
        <form className='form' onSubmit={handlesubmit}>
            <div className='form-control'>
           <label htmlFor='firstName'>Name:</label>
           <input onChange={(e)=>{
       setName(e.target.value);
        
        }} value={name}  type="text" name='firstName' id="firstName"/>
           <label htmlFor='email'>Email:</label>
           <input onChange={(e)=>{
        
        setEmail(e.target.value);
        }} value={email} type="email" name='email' id="email"/>
           </div>
           <button className="btn btn-ptimary">Add person</button>
        </form>
      <div>
        {person.map((people)=>{
            return (
            <div key={people.id} className='d-flex justify-content-between'>
                <span>{people.name}</span><span>{people.email}</span>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default ControlledInput
