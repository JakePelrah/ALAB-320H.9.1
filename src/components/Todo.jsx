import { useState } from 'react'
import trash from '../assets/trash3-fill.svg'
import pen from '../assets/pen-fill.svg'
import save from '../assets/floppy-fill.svg'


export default function TODO({ id, todoText, created, dispatch }) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(todoText)
    const [isChecked, setIsChecked] = useState(false)

    function onClick() {
        if (text === '') {
            alert('note is empty')
            return
        }
        setIsEditing(false)
        setIsChecked(false)
        dispatch({ type: "edit", text, id })
    }

    return (
        <div className="card">
            <div className='card-header'>

                {isEditing
                    ? <div className='d-flex justify-content-between'>
                        <input value={text} onChange={(e) => setText(e.target.value)} type='text' />

                        <button onClick={onClick} className='btn ms-2'>
                            <img src={save} />
                        </button>

                    </div>
                    : <div className='d-flex justify-content-between align-items-center'>

                        <div className="btn-group me-2" role="group" aria-label="Basic example">

                            <button onClick={() => setIsEditing(!isEditing)} className='btn'><img src={pen} /></button>

                            {isChecked ? <button onClick={() => dispatch({ type: "delete", id })} className='btn'><img src={trash} /></button> : null}
                        </div>

                        <div className='date'>{created}</div>

                        <input className="form-check-input"
                            value={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            type="checkbox" />
                    </div>
                }
            </div>

            <div className="card-body">
                <div className='me-2'>{text}</div>
            </div>

        </div>)
}