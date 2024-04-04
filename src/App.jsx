import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./buttons.css";
import Button from "./assets/components/button.jsx";
import CounterView from "./assets/components/counter_view.jsx";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <CounterView clickCount={count} />
        <Button text="Click" isClickBtn={true} handleClick={handleClick} />
        <Button text="Reset" isClickBtn={false} handleClick={resetCount} />
        {/* <button onClick={() => useState(0)}>Restart count</button> */}
      </div>
      <p className="read-the-docs">
        It ain't much, but it's <strong>honest work</strong>.
      </p>
    </>
  );
}

export default App;
