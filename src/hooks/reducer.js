const initialState= {todos:[]}

function reducer (state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                todos: [...state.todos, createTodo(state,action.payload)]
            }
        case 'remove':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'complete':
            return {
                ...state,
                todos: toggleTodo(state, action.payload)
            }
        default:
            return state;
    
    }
}

function createTodo (state, value) {
    return {
        id: state.todos.length > 0 ? state.todos[state.todos.length-1].id + 1 : 1,
        value,
        complete: false }
}

const toggleTodo = (state, id) => state.todos.map( todo => todo.id === id ? {...todo, complete:!todo.complete} : todo)



export {reducer, initialState};
