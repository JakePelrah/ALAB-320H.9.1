import { createRoot } from 'react-dom/client'
import TodoProvider from './NoteProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
