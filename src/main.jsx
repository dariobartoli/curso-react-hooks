import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-useContext/MainApp'
//import Memorize from './06-memos/Memorize'
//import MemorizeHook from './06-memos/MemorizeHook'
//import { Callback } from './06-memos/Callback'
//import { TodoApp } from './08-useReducer/TodoApp'
//import { Padre } from './07-tarea-memo/Padre'
//import Layout from './05-useLayoutEffect/Layout'
//import FocusScreen from './04-useRef/FocusScreen'
//import MultiplesCustomHooks from './03-examples/MultiplesCustomHooks'
//import SimpleFormWithCustomHook from './02-useEffect/SimpleFormWithCustomHook'
//import SimpleForm from './02-useEffect/SimpleForm'
//import HooksApp from './HooksApp'
//import CounterApp from './01-useState/CounterApp'
//import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks'

//import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp/>
    </React.StrictMode>,
  </BrowserRouter>
)
