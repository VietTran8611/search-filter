import { useState } from 'react'
import { Filter } from './Filter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Filter />
    </>
  )
}

export default App
