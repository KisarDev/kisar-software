import { useState } from "react";
import "./App.css";
import LobbyInterface from "./components/LobbyInterface";
import Scene from "./components/Scene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Scene />
    </>
  );
}

export default App;
