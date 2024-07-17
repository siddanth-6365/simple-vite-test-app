import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h1> Page counter :</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
       <p>
       hi this is a simple counter app using react 
       </p>
      </div>
    </>
  );
}

export default App;
