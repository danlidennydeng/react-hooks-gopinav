//import React from 'react'

import React, { useReducer } from 'react'
// above are for using useReducer and useContext togather

import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
// import CounterMultiple from './components/CounterMultiple';
//import CounterTwoMultiple from './components/CounterTwoMultiple';
// import CounterTwoToo from './components/CounterTwoToo';
// import ComponentC from './components/ComponentC';
// import DataFetchingOneClick from './components/DataFetchingOneClick';
// import DataFetching from './components/DataFetching';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import MouseContainer from './components/MouseContainer';
// import HookMouse from './components/HookMouse';
// import ClassCounterOneCondition from './components/ClassCounterOneCondition';
// import HookCounterOneCondition from './components/HookCounterOneCondition';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounter from './components/HookCounter';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// above are using useContext alone.

export const UserContext = React.createContext()

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
// above are for using useReducer and useContext togather.

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
  
    </CountContext.Provider>
      
      {/* <CounterTwoMultiple /> */}
      {/* <UserContext.Provider value={'Denny'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetchingOneClick /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassCounterOneCondition /> */}
      {/* <HookCounterOneCondition /> */}
      {/* <HookCounter />
      <hr />
      <HookCounterTwo />
      <hr />
      <HookCounterThree />
      <hr />
      <HookCounterFour />
      <hr />
      <ClassCounterOne />
      <HookCounterOne /> */}
    
  );
}

export default App;
