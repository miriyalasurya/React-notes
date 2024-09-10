import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-blue-900 p-3 rounded-md">TAILWIND TEST</h1>
      <Card username = "surya" />
      <Card username = "sujay" />
      <Card />
    </>
  );
}

export default App;
