
import './App.css';
import {useReducer} from "react"
import {reducer, initialState} from './hooks/reducer';
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    <div className="App">
       <h1>Todo List</h1>
       <TodoForm dispatch={dispatch}  />
       { state.todos.length !== 0 ? state.todos.map((item) => <TodoItem todo={item} key={item.id} dispatch={dispatch} />) : <div>Add a todo first</div> }
    </div>
  );
}

export default App;
