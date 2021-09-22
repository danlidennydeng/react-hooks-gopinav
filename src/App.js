
import './App.css';
import HookCounter from './components/HookCounter';
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
    </div>
  );
}

export default App;
