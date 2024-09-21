import { useEffect, useState } from 'react'
import trash from './assets/trash3-fill.svg'
import lock from './assets/lock-fill.svg'
import unlock from './assets/unlock-fill.svg'



import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([{ id: 1, text: "Pick up squash and onions." }, 
    { id: 2, text: "Pick up squash and onions." },
    { id: 3, text: "Pick up squash and onions." }, 
    { id: 4, text: "Pick up squash and onions." },
    { id: 5, text: "Pick up squash and onions." },
    { id: 6, text: "Pick up squash and onions." },
    { id: 7, text: "Pick up squash and onions." },
    { id: 8, text: "Pick up squash and onions." },
  
  
  ])

  const renderedNotes = notes?.map(note => <Note note={note} />)

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TODO List</a>
        </div>
      </nav>


      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-5">
        {renderedNotes}
      </div>
    </>
  )
}

export default App






function Note({ note }) {

  const [isLocked, setIsLocked] = useState(true)
  const [isCompleted, setIsCompleted] = useState(false)

  function deleteNote() {

  }

  useEffect(() => {
    const n = document.getElementById(`noteId-${note.id}`)
    let textArea = n.querySelector('textarea')
    textArea.toggleAttribute('readonly')
    textArea.focus()
    textArea.setSelectionRange(textArea.value.length, textArea.value.length);
  }, [isLocked])





  return (<div className='col'>
    <div id={`noteId-${note.id}`} className="card note">
      <div className="card-body">

        <div className='d-flex align-items-center'>

          <div class="form-check">
            <input onChange={(e) => setIsCompleted(e.target.checked)} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          </div>

          <textarea readOnly>
            {note.text}
          </textarea>

          <div className='btn-group mb-1'>
            {isCompleted ? <a href="#" id="trash-btn" className="btn"><img src={trash}></img></a> : null}

            <a onClick={() => setIsLocked(prevState => !prevState)} href="#" className="btn"><img src={isLocked ? lock : unlock}></img></a>
          </div>
        </div>

      </div>
    </div>

  </div>)
}