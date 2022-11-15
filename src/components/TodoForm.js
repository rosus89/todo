import { useState } from "react"

function TodoForm  ({dispatch}) {

    const [todo, setTodo] = useState("");

    function handleSubmit(todoTxt) {
        dispatch({type: 'add', payload:todoTxt})
        setTodo("")
    }

    return (
        <>
        <input onChange={(e)=>setTodo(e.target.value)}
                type="text"
                value={todo}>
        </input>
        <button onClick={()=>{handleSubmit(todo)}}>
                Add Todo
        </button>
        </>
        )
}
        

export default TodoForm