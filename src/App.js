import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  const [countId, setCountId] = useState(null);
  const TimerFunction = () => {
    const countId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    setCountId(countId);
  };
  useEffect(() => {
    if (count === 5) clearInterval(countId);
  }, [count]);
  return (
    <div className="App">
      <div>{count}</div>
      <button type="button" onClick={TimerFunction}>
        Click
      </button>
    </div>
  );
}
