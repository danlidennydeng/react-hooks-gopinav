
import './App.css';
// import ClassCounterOne from './components/ClassCounterOne';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <hr />
      <HookCounterTwo />
      <hr />
      <HookCounterThree />
      <hr />
      <HookCounterFour />
      <hr />
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>

  );
}

export default App;
