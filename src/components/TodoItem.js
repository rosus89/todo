const style = {
     todo: {
          display: "flex",
          justifyContent: "center",
          padding : "1rem 1rem",
          border: "1px solid #d6d6d6",
          cursor: "pointer"
     },
     delete: {
          padding: "0 0.5rem",
          cursor: "pointer"

     }

}

function TodoItem ({todo, dispatch}) {
     const handleDelete = (id) => {
          dispatch({type: 'remove', payload:id})
     }
     const handleComplete = (id) => {
          dispatch({type: 'complete', payload:id})
     }

     return (
          <div onClick={()=>handleComplete(todo.id)}
               style={{...style.todo, textDecoration: todo.complete && "line-through"}}>
               {todo.value}
               <div onClick={()=>handleDelete(todo.id)}
                    style={style.delete}
                    >X</div>
          </div>
     )
}
export default TodoItem  