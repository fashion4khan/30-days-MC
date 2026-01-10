import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("light");

  function colorChange()
  {
    setColor(color === "light" ? "dark" : "light");
  }
  return (
    <div className={`app ${color}`}>
      <h1>{color === "light" ? "light theme" : "dark theme"}</h1>
      <button onClick={colorChange}>Switch to {color === "light" ? "dark" : "light"}</button>
    </div>
  );
}

export default App;
