import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state      
  }
}

const reducerTwo = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 2
    case 'decrement':
      return state - 2
    case 'reset':
      return initialState
    default:
      return state      
  }
}

function CounterMultiple() {

  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducerTwo, initialState)

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <div>
      <div>Count Multiple - {countTwo}</div>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>

      </div>
    </div>
  )
}

export default CounterMultiple