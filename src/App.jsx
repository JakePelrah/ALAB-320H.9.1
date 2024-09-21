import { useEffect, useState } from 'react'
import Note from './components/Note';
import add from './assets/plus-square-fill.svg'
import { v4 as uuidv4 } from 'uuid';
import './App.css'


function App() {

  const [notes, setNotes] = useState([])

  function editNote(noteText, id) {
    setNotes(notes.map(note => (note.id === id ? { ...note, noteText } : note)))
  }

  const renderedNotes = notes?.map(note => <Note key={note.id} note={note} editNote={editNote} />)
  
  function createNewNote() {
    setNotes(prevState => [{
      id: uuidv4(),
      noteText: '',
      created: new Date()
    }, ...prevState])
  }

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TODO List</a>

          <div type='button' className='d-flex align-items-center' onClick={createNewNote}>
          <img id='add-note-img' src={add}></img>
        </div>
        
        </div>
      </nav>


      <div className="d-flex flex-column align-items-center">
        {renderedNotes}
      </div>
    </>
  )
}

export default App
