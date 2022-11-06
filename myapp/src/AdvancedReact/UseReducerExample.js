import React, { useReducer, useState } from 'react'
import ModalForReducer from './ModalForReducer';
import {reducer} from "./reducer"

const UseReducerExample = () => {
const [name,setName]=useState("");
 
const closeModal=()=>{
    dispatch({type:"CLOSE"})
}

const initialState={
        person:[],
        IsModalDisplay:false,
        ModalMsg:"hello world"
}


const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>
          {state.IsModalDisplay&&<ModalForReducer msg={state.ModalMsg} closeModal={closeModal}/>}
          
      <form onSubmit={(e)=>{
            e.preventDefault();
            if(name){
                dispatch({type:"ADD_PERSON",payload:name});
                setName("");
              
            }
            else{
                dispatch({type:"INVALID_INPUT"})
            }
           
        }}>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value);
        }}/>
        <button className="btn btn-success" >Add</button>
      </form>
      <section>
        {  state.person.map(people=>{
            return <h1 key={people.id}><span>{people.name}</span>
            <span><button onClick={(e)=>{
            dispatch({type:"REMOVE",payload:people.id})
            }} className="btn btn-danger">Remove</button></span></h1>
        })}
      </section>
    </div>
  )
}

export default UseReducerExample;
