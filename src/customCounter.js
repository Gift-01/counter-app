import React from "react";
import NavBar from "./navBar";
import { useState } from "react";
import { useCounter } from "./customCounterHook";

function CustomCounter() {
  const [inputVal, setInputVal] = useState(0);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const [increment, decrement, reset, setCount, counter] = useCounter();

  return (
    <div className="counter">
      <NavBar />

      <div className="screen">
        <h3> {counter}</h3>
      </div>
      <div className="functions">
        <div className="functions__first">
          <button className="functions__first-btn" onClick={increment}>
            Increment
          </button>
          <button className="functions__first-btn" onClick={decrement}>
            Decrement
          </button>
        </div>
        <button className="functions__second-btn" onClick={reset}>
          Reset
        </button>
        <div className="functions__third">
          <input
            className="functions__third-input"
            type="number"
            aria-label="value"
            onChange={handleChange}
            value={inputVal}
          />
          <button
            className="functions__third-btn"
            onClick={() => setCount(inputVal)}
          >
            Set value
          </button>
        </div>
      </div>
    </div>
  );
}
export default CustomCounter;
