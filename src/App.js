import React from 'react'
import './App.css';
import ComponentC from './components/ComponentC';
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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Denny'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

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
    </div>

  );
}

export default App;
