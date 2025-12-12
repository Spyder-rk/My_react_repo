import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 15
  const [counter, setCounter] = useState(0)  //useState(this value is the intial value) here is a method. This here refer to HOOKS/HOOK. here this method returns as a array so the aaray is taken.
                                            // inside this the name counter&setCounter is not necessary u can take whatever u want.

  const addValue = ()=>{
  setCounter(counter + 1)   //here setcounter decides/update the nearby or its brother i.e counter here which is updated i.e in line 7.  
  }

  const removeValue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>

    <h1>Counter here {counter}</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button> {" "}
    <button onClick={removeValue}>Remove value</button>
    

    </>
  )
}

export default App
