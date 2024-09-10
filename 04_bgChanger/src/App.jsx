import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-lg">
          <button
            onClick={()=>{setColor("red")}}
            className="outline-none px-3 rounded-md text-white"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={()=>{setColor("green")}}
            className="outline-none px-3 rounded-md text-white"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={()=>{setColor("blue")}}
            className="outline-none px-3 rounded-md text-white"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={()=>{setColor("pink")}}
            className="outline-none px-3 rounded-md text-white"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
