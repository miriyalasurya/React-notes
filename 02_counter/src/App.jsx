import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter++;
    counter = Math.min(20, counter);
    setCounter(counter);
  };
  const removeValue = () => {
    counter = Math.max(0, counter - 1);
    setCounter(counter);
  };
  return (
    <>
      <h1>Testing nigga</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
