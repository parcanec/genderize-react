import { useState } from 'react'
import './App.css'
import Button from './components/button.jsx'
import TextInput from './components/textinput.jsx'


function App() {
  return (
    <div className="App">
        <h1>Введите имя для проверки пола</h1>
        <TextInput></TextInput>
        <Button/>
    </div>
  )
}

export default App