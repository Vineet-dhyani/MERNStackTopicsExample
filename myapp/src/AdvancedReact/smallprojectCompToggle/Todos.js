import React, { useState } from 'react'

const Todos = () => {
   
    let [todos, setTodos] = useState([
        { task: "study", id: 1 },
        { task:"Teach",   id:2 }
    ]);

   let [value,setValue]=useState("");
   const AddData=()=>{
   
    let newList=[...todos,{task:value,id:new Date(  )}];
    setTodos(newList);
    setValue("");
   }
    return (
        <div className='container'>
            <section>
                <h1>Todos List</h1>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(value.trim())
                    {
                        AddData();
                    }
                    else{
                        console.log("Addcorrect Todo");
                        }}} className="form-control">
               <input type="text" id='add' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
                <button   className="btn btn-primary">Add</button>
                <article>
                    <ul>{todos.map((todo) => {
                        return (
                            <li key={todo.id}><span>{todo.task}</span> &nbsp; &nbsp; &nbsp; &nbsp;
                                <button onClick={() => {
                                    let newlist = todos.filter((todoEle) => todoEle.id != todo.id
                                    )
                                    setTodos(newlist)
                                        
                                }} className="btn btn-danger">remove</button></li>
                        )
                    })}</ul>
                </article>
               <button onClick={() => { setTodos([]) }} className="btn btn-danger">clear All</button>
               </form>
            </section>

        </div>
    )
}
export default Todos
