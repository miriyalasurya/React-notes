import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addVal = () => {
    setCount((prevCount) => prevCount + 1); //we can use a callback
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1); //these wont make any difference due to React Fibre
    // setCount(count + 1); //use state will update it in batches and hence will update only once
    // setCount(count + 1);
  };
  const subVal = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>COUNTER : {count} </h1>
      <button onClick={addVal} className="mr-6">
        Add
      </button>
      <button onClick={subVal}>Sub</button>
    </>
  );
}

export default App;
