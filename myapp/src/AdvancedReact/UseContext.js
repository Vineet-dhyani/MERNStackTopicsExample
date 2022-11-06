import React, { useContext, useState } from 'react'

// const UseContext = () => {
//     const data=[
//         {id:1,name:"vineet"},
//         {id:2,name:"vinay"},
//         {id:3,name:"ritesh"}
//     ]
    
//     const [person,setPerson]=useState(data);
//     const removePerson=(id)=>{
//     const newPerson=person.filter((people)=>{
//       return people.id!==id
//      });
//         setPerson(newPerson)
//     }
//     return (
//     <div>
//       <h1>UseContext Example</h1>
//       <Link data={person} removePerson={removePerson} />
//     </div>
//   )
// }

// const Link=({data,removePerson})=>{
//     return(
//         <div>
//         <Person data={data} removePerson={removePerson}/>
//         </div>
    
//     )
// }

// const Person=({data,removePerson})=>{
//     return (
// <>
// {data.map((people)=>{
//     return <SinglePerson {...people} key={data.id} removePerson={removePerson}/>
// })}
// </>
//     )
// }

// const SinglePerson=({id,name,removePerson})=>{
//     return(
// <div>
// <h1>{name}</h1>
// <button onClick={()=>{removePerson(id)}}>remove</button>
// </div>
//     )
// }
///above code propsdrilling

const contextRef=React.createContext();
const UseContext = () => {
    const data=[
        {id:1,name:"vineet"},
        {id:2,name:"vinay"},
        {id:3,name:"ritesh"}
    ]
    
    const [person,setPerson]=useState(data);
    const removePerson=(id)=>{
    const newPerson=person.filter((people)=>{
      return people.id!==id
     });
        setPerson(newPerson)
    }
    return (
    <contextRef.Provider value={{person,removePerson:removePerson}}>
    <div>
    <h1>UseContext Example</h1>
      <Link/>
    </div>
    </contextRef.Provider>
  )
}

const Link=()=>{
    return(
        <div>
        <Person/>
        </div>
    
    )
}

const Person=()=>{
    const value=useContext(contextRef);
    return (
<>
{value.person.map((people)=>{
    return <SinglePerson {...people} key={people.id} />
})}
</>
    )
}

const SinglePerson=({id,name})=>{
    const value=useContext(contextRef);
    return(
<div>
<h1>{name}</h1>
<button onClick={()=>{value.removePerson(id)}}>remove</button>
</div>
    )
}


export default UseContext
