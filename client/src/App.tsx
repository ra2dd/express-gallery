import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Art from './components/Art'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Art />
    </> 
  )
}

export default App
