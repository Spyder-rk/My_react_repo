import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('purple');

  // function changeColor(color) {
  //   setColor(color); // ✅ FIXED
  // }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
          <button onClick={() => setColor('red')} style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}>Blue</button>
          <button onClick={() => setColor('green')} style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={() => setColor('yellow')} style={{backgroundColor: 'yellow'}}>Yellow</button>
          <button onClick={() => setColor('purple')} style={{backgroundColor: 'purple'}}>Purple</button>
          <button onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App




