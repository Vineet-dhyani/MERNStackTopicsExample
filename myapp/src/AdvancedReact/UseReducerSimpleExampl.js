import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="INC"){
      return  state+1;
    }
    if(action.type==="DEC"){
       return  state-1;
    }
    return state;
}
const UseReducerSimpleExampl = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
    <p>{state}</p>
    <button onClick={()=>dispatch({type:"INC"})} className="btn btn-primary">Inc</button>
    <button onClick={()=>dispatch({type:"DEC"})} className="btn btn-primary">DEC</button>
   </div>
  )
}

export default UseReducerSimpleExampl
