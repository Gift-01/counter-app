import React, { useReducer, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useCounter } from "./customCounterHook";
import { ErrorFallback } from "./errorBoundary";
import { reducer } from "./reducer";
import "./styles/counter.css";

const Counter = () => {
  const initialValue = 0;
  const [value, dispatch] = useReducer(reducer, initialValue);

  const [newValue, setNewValue] = useState("");

  const [newError, setNewError] = useState("");

  useEffect(() => {
    if (!Number.isInteger(newValue) && newValue !== "") {
      setNewError("You can only set an integer value.");
    } else {
      setNewError("");
    }
  }, [newValue]);

  return (
    <div className="counter">
      <ErrorBoundary resetKeys={[newError]} FallbackComponent={ErrorFallback}>
        {newError ? (
          <ErrorFallback
            error={{ message: newError }}
            resetErrorBoundary={() => setNewError("")}
          />
        ) : (
          <>
            <div className="screen">
              <h3>{value}</h3>
            </div>
            <div className="functions">
              <div className="functions__first">
                <button
                  className="functions__first-btn"
                  onClick={() =>
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useCounter({ dispatch: dispatch, type: "INCREMENT" })
                  }
                >
                  +
                </button>
                <button
                  className="functions__first-btn"
                  onClick={() =>
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useCounter({ dispatch: dispatch, type: "DECREMENT" })
                  }
                >
                  -
                </button>
              </div>
              <button
                className="functions__second-btn"
                onClick={() =>
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  useCounter({ dispatch: dispatch, type: "RESET" })
                }
              >
                {" "}
                RESET
              </button>
              <div className="functions__third">
                <input
                  id="value"
                  aria-label="value"
                  className="functions__third-input"
                  value={newValue}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target.value))) {
                      setNewValue(Number(e.target.value));
                    } else {
                      setNewValue(e.target.value);
                    }
                  }}
                />

                <button
                  className="functions__third-btn"
                  onClick={() => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useCounter({
                      dispatch: dispatch,
                      type: "SET VALUE",
                      val: newValue,
                    });
                    setNewValue("");
                  }}
                >
                  {" "}
                  SET VALUE
                </button>
              </div>
            </div>
          </>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default Counter;
