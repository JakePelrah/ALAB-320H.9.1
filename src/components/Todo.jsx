import { useEffect, useState } from 'react'
import trash from '../assets/trash3-fill.svg'
import pen from '../assets/pen-fill.svg'
import save from '../assets/floppy-fill.svg'

export default function TODO({ id, todoText, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(todoText)
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="card">
            <div className='card-header'>


                {isEditing
                    ? <div className='d-flex justify-content-between'> <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
                        <button onClick={() => {
                            if (text === '') {
                                alert('note is empty')
                                return
                            }

                            setIsEditing(false)
                            setIsChecked(false)
                        }} className='btn ms-2'>
                            <img src={save} />
                        </button>
                    </div>
                    : <div className='d-flex justify-content-between'>
                        <div className="btn-group me-2" role="group" aria-label="Basic example">
                            <button onClick={() => setIsEditing(!isEditing)} className='btn'><img src={pen} /></button>

                            {isChecked ? <button onClick={() => deleteTodo(id)} className='btn'><img src={trash} /></button> : null}
                        </div>
                        <input className="form-check-input" value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" id="flexCheckDefault" />
                    </div>}

            </div>
            <div className="card-body">

                <div className='me-2'>{text}</div>

            </div>
        </div>)
}