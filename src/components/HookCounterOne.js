import React, {useState, useEffect} from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Denny has clicked ${count} time`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne