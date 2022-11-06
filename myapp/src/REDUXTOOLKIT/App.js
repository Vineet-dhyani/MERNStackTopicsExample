import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, deleteTodo } from './slices/todoSlice';

const App = () => {
    const [input, setInput] = useState("");
    const todos = useSelector((state) => state.todo.todos);

    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addTodos(input));
        setInput("")
    }
    const handleDelete = (index) => {
        dispatch(deleteTodo(index))
    }

    return (
        <div >
            <div>
                <h2>REDUXTOOLKIT TODO APP</h2>
                <input type="text" name="box" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
                {
                    todos && todos.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                                <button onClick={() => handleDelete(index)}>delete</button>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default App
