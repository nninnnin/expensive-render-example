import { useState } from "react";
import "./App.css";
import ExpensiveItem from "./components/Expensive";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div className="m-10 flex flex-col gap-5">
        <div>{count}</div>

        <button onClick={handleClick}>버튼</button>
      </div>

      <div className="flex flex-wrap">
        {Array.from({ length: 30000 }, (_, i) => (
          <ExpensiveItem
            key={i}
            index={i}
            person={{
              name: `Stella${i}` + `${Math.random()}`.slice(2, 3),
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
