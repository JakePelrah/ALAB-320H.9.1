import { useEffect, useState } from 'react'
import TODO from './components/Todo';
import { v4 as uuidv4 } from 'uuid';
import add from './assets/plus-lg.svg'
import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  const [newTodoText, setNewTodoText] = useState('')



  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function createTodo() {
    if (newTodoText === '') {
      alert('empty todo')
      return
    }
    setTodos(prevState => [{ id: uuidv4(), text: newTodoText,created:new Date().toLocaleString() }, ...prevState])
    setNewTodoText('')
  }


  const renderTodos = todos.map(todo => <TODO key={todo.id} id={todo.id} todoText={todo.text} deleteTodo={deleteTodo} created={todo.created} />)

  return (
    <div className='d-flex flex-column align-items-center'>
      
      <h1 className='mt-5'>Create Todo List</h1>
      
      <div className='d-flex mt-5 w-50'>
        <input class="form-control me-2" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type='text' />
        <button onClick={() => createTodo()} className='btn '><img src={add} /></button>
      </div>

      <div className='d-flex flex-column gap-3 mt-5'>
        {renderTodos}
      </div>

    </div>
  )
}

export default App

