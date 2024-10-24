import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-xl font-bold'>Hello ReactWithDaisyUI</h1>
       <button className='btn'>Click Me</button>
    </>
  )
}

export default App
