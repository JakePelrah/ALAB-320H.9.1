import { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext)

export default function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(reducer, [...JSON.parse(localStorage.getItem('todos'))]);

    function reducer(todos, action) {

        if (action.type === 'edit') {
            return todos.map(todo => (todo.id === action.id
                ? { ...todo, text: action.text }
                : todo))
        }

        if (action.type === 'delete') {
            return todos.filter(todo => todo.id !== action.id)
        }

        if (action.type === 'create') {
            if (action.newTodoText === '') {
                return todos
            }

            return [
            {
                id: uuidv4(), text: action.newTodoText, created: new Date().toLocaleString()
            }, ...todos]
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    return (
        <TodoContext.Provider value={{
            todos, dispatch
        }}>
            {children}
        </TodoContext.Provider>
    );
};