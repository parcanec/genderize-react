import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/button.jsx'
import TextInput from './components/textinput.jsx'


function App() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const serverUrl = 'https://api.genderize.io'

  async function check(env) {
    env.preventDefault()
    if (name.length >2) {
      let url = `${serverUrl}?name=${name}`
      let response = await fetch(url)
      let chekBase = await response.json()
      if (chekBase.gender!==null) {
        setResult(name+' - '+chekBase.gender)
      } else {
        setResult('Результат не найден')
      }
    } else {
      setResult('Ошибка')
    }

  }
  useEffect(()=>{setResult('')},[name])
  return (
    <form className="App">
        <h1>Введите имя для проверки пола</h1>
        <TextInput setName={setName} text='Введите имя' value={name}/>
        <Button text='Проверить пол' onClick={check}/>
        <h2>{result}</h2>
    </form>
  )
}

export default App