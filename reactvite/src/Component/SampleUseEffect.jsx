import { useEffect, useState } from 'react'

export default function SampleUseEffect() {
    const [count, stateCounter] = useState(0)
    const [pointer, setPointer] = useState(100)
  useEffect(() => {
        // console.log("UseEffect Called")
        console.log("Counter"+count)
        console.log("Pointer"+pointer)
  }, [count, pointer])
  function setCount() {
    stateCounter(count + 5)
  }
  function setpointer() {
    setPointer(pointer - 5)
  }
  return (
    <div>
        <h2 style={{ color: 'blue' }}>SampleUseEffect</h2>
        <h1>Counter value:{count}</h1>
        <h1>Pointer value:{pointer}</h1>
        <button onClick={setCount}>Inc</button>
        <button onClick={setpointer}>Dec</button>
    </div>
  )
}