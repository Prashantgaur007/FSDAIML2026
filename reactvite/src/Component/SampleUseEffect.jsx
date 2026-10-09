import { useEffect, useState } from 'react'

export default function SampleUseEffect() {
    const [count, stateCounter] = useState(0)
  useEffect(() => {
        // console.log("UseEffect Called")
        console.log("Counter"+count)
  }, [])
  function setCount() {
    stateCounter(count + 5)
  }
  return (
    <div>
        <h2 style={{ color: 'blue' }}>SampleUseEffect</h2>
        <h1>Counter value:{count}</h1>
        <button onClick={setCount}>Inc</button>
    </div>
  )
}