import { useReducer, useState } from 'react'
import TODO from './components/Todo';
import { v4 as uuidv4 } from 'uuid';
import add from './assets/plus-lg.svg'
import './App.css'


function App() {
  const [newTodoText, setNewTodoText] = useState('')
  const [todos, dispatch] = useReducer(reducer, []);

  function reducer(todos, action) {

    if (action.type === 'delete') {
      return todos.filter(todo => todo.id !== action.id)
    }
    if (action.type === 'create') {
      if (action.newTodoText === '') {
        return
      }

      setNewTodoText('')
      return [...todos,
      {
        id: uuidv4(), text: action.newTodoText, created: new Date().toLocaleString()
      }]
    }
  }


  const renderTodos = todos.map(todo => <TODO key={todo.id} id={todo.id} todoText={todo.text} dispatch={dispatch} created={todo.created} />)

  return (
    <div className='d-flex flex-column align-items-center'>

      <h1 className='mt-5'>Create Todo List</h1>

      <div className='d-flex mt-5 w-50'>
        <input class="form-control me-2" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type='text' />
        <button onClick={() => dispatch({ type: "create", newTodoText: newTodoText })} className='btn '><img src={add} /></button>
      </div>

      <div className='d-flex flex-column gap-3 mt-5'>
        {renderTodos}
      </div>

    </div>
  )
}

export default App

