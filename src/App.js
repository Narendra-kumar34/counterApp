import './App.css';
import {useState} from "react";

function App() {
  const [cnt, setCnt] = useState(0);

  const handleInc = () =>{
    setCnt((prevCnt) => prevCnt + 1);
  }

  const handleDec = () =>{
    setCnt((prevCnt) => prevCnt - 1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {cnt}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default App;
