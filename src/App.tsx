import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Eye from './components/eye/Eye'

function App() {

  return (
    <div className="App">
      <div className='eye-wrapper-left'>
        <Eye/>
      </div>
      <div className='eye-wrapper-right'>
        <Eye/>
      </div>
      <div className='mouth-wrapper'>
        <h2>HELLO WORLD</h2>
      </div>
    </div>

      
  )
}

export default App
