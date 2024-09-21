import { useState, useEffect } from 'react'
import trash from '../assets/trash3-fill.svg'
import lock from '../assets/lock-fill.svg'
import unlock from '../assets/unlock-fill.svg'


export default function Note({ note, editNote }) {
    const [isLocked, setIsLocked] = useState(true)
    const [isCompleted, setIsCompleted] = useState(false)
    const [noteText, setNoteText] = useState('')
  
    useEffect(() => {
  
      // get the text area for the note
      const noteDiv = document.getElementById(`noteId-${note.id}`)
      let textArea = noteDiv.querySelector('textarea')
  
      if (isLocked) {
        textArea.setAttribute('readonly', true)
        editNote(noteText, note.id)
      }
      else {
        textArea.removeAttribute('readonly')
      }
  
      // focus input area
      textArea.focus()
  
      // set cursor to end of text
      textArea.setSelectionRange(textArea.value.length, textArea.value.length);
  
  
    }, [isLocked])
  
  
  
  
  
    return (<div className=''>
      <div id={`noteId-${note.id}`} className="card note m-3">
        <div className="card-body">
  
          <div className='d-flex align-items-center'>
  
            <div className="form-check">
              <input onChange={(e) => setIsCompleted(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
  
            <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} readOnly>
              {note.noteText}
            </textarea>
  
            <div className='btn-group mb-1'>
              {isCompleted ? <a href="#" id="trash-btn" className="btn">
                <img src={trash}></img></a> : null}
              <a onClick={() => setIsLocked(prevState => !prevState)} href="#" className="btn"><img src={isLocked ? lock : unlock}></img></a>
            </div>
          </div>
  
          <span className='date d-flex justify-content-center mt-1'>{note.created.toLocaleString()}</span>
        </div>
      </div>
  
    </div>)
  }