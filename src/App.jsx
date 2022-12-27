import { useState } from 'react'
import './App.css'
import Button from './components/button.jsx'
import TextInput from './components/textinput.jsx'


function App() {
  return (
    <div className="App">
      <form>
        <h1>Введите имя для проверки пола</h1>
        <TextInput></TextInput>
        <Button text='Проверить пол' big={true}/>
      </form>
    </div>
  )
}

export default App