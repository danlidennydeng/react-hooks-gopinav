import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)

  }

  useEffect(() => {
    console.log('useEffect call')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('component unmounted')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  // [] array changes, only runs window.addEventListener('mousemove', logMousePosition), 
  // never run anything else again, including console.log('useEffect call').

  return (
    
    <div>
      Hooks X - {x} Y- {y}
    </div>
  )
}

export default HookMouse