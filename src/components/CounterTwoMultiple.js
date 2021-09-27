import React, {useReducer} from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const initialState2 = {
  counter: 2
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
      
    case 'reset':
      return initialState
    default:
      return state      
  }
}

const reducer2 = (state, action) => {
  switch(action.type) {
    
    case 'increment9':
      return { ...state, counter: state.counter + action.value }
    case 'decrement9':
      return { ...state, counter: state.counter - action.value }
      
    case 'reset':
      return initialState2
    default:
      return state      
  }
}

function CounterTwoMultiple() {

  const [count, dispatch] = useReducer(reducer, initialState)
  
  const [count2, dispatch2] = useReducer(reducer2, initialState2)


  return (
    <div>
      <div>First Counter  {count.firstCounter}</div>

      <div>second Counter  {count.secondCounter}</div>

      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>

      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 3})}>Decrement 3</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <div>
      <button onClick={() => dispatch({type: 'increment2', value: 1})}>Second Increment</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Second Decrement</button>
      </div>
      
      <div>
      <div>Counter Multiple {count2.counter}</div>
      <button onClick={() => dispatch2({type: 'increment9', value: 2})}>Counter Multiple Increment</button>
      <button onClick={() => dispatch2({type: 'decrement9', value: 2})}>Counter Multiple Decrement</button>
      <button onClick={() => dispatch2({type: 'reset'})}>Reset</button>
      </div>
    </div>
  )
}

export default CounterTwoMultiple