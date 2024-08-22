import MotionNumber from 'motion-number'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setCount(count + random);
  }

  return (
    <>
      <h1>Motion Number Demo</h1>
      <button style={{ display: 'block' }} onClick={handleIncrease}>Increase</button>
      <MotionNumber
        style={{ fontSize: 50, marginTop: 10 }}
        value={count}
        format={{ notation: 'compact' }} />
    </>
  )
}

export default App
