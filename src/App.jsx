import { useState } from 'react'
import { useTodo } from './NoteProvider';
import TODO from './components/Todo';
import add from './assets/plus-lg.svg'
import './App.css'


function App() {
  const [newTodoText, setNewTodoText] = useState('')
  const{todos, dispatch} = useTodo()

  const renderTodos = todos?.map(todo => <TODO key={todo.id} id={todo.id} 
    todoText={todo.text} 
    dispatch={dispatch} created={todo.created} />)


  function createTodo(){
    dispatch({ type: "create", newTodoText: newTodoText })
    setNewTodoText('')
  }

  return (
    <div className='d-flex flex-column align-items-center'>

      <h1 className='mt-5'>Create Todo List</h1>

      <div className='d-flex mt-5 w-50'>
        <input className="form-control me-2" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type='text' />
        <button onClick={() =>createTodo()} className='btn '><img src={add} /></button>
      </div>

      <div className='d-flex flex-column gap-3 mt-5'>
        {renderTodos}
      </div>

    </div>
  )
}

export default App

