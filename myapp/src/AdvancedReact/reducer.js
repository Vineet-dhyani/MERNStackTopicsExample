export const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="ADD_PERSON"){
        return {...state,
        person:[...state.person,{id:new Date().getTime().toString(),name:action.payload}],
        IsModalDisplay:true,
        ModalMsg:"Person ADDED"
        }
    }
    if(action.type==="INVALID_INPUT"){
        return {...state,
    
        IsModalDisplay:true,
        ModalMsg:"Name Is Required"
        }
    }
    if(action.type==="REMOVE"){
       const newPerson=state.person.filter(people=>people.id!==action.payload);
        return {...state,
         person:newPerson,
        IsModalDisplay:true,
        ModalMsg:"Person Removed"
        }
    }
    if(action.type==="CLOSE"){
        return { ...state,IsModalDisplay:false}
    }
    
  throw  new Error("Action Not found");
}