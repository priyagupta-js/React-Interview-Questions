import React from "react";
import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  
    function increment (){
      setCount(count+1);
    }

    function decrement (){
      setCount(count-1);
    }

    function resetBtn() {
      setCount(0);
    }
  return (



    <>
      <div className="app">
        <h2>Counter App</h2>
        <div className="counter">
          <button className="btn-increment" onClick={increment}>+</button>
          <p>{count}</p>
          <button className="btn-ecrement"onClick={decrement}>-</button>
          <div className="reset"><button onClick={resetBtn}>Reset</button></div>
        </div>
      </div>
    </>
  );
}

export default App;
