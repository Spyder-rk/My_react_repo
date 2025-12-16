import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='text-3xl bg-purple-800 p-3 rounded-md'>Tailwind X React</h1> */}
    <Card username="Rajesh"/>               {/*  refering from that card here we can apply what prop to be used in which card or in any component */}
    <Card/>
    <Card/>
    
    </>
    
  )
}

export default App
