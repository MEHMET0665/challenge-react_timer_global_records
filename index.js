// Globals
import "./styles.scss";
import React, { useState, useEffect} from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(60);
  const [isActive, setIsActive] = useState(false);

  // TODO: implement counter...
  function handleClick() {
    setIsActive(true);
  }
   function reset() {
    setCounter(60);
    setIsActive(false)
   }
   useEffect(() => {
    let interval = null;
    if (isActive && counter>0) {
      interval = setInterval(() => {
        setCounter(counter => counter - 1);
      }, 1000);
    } else if ( counter!== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);
  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{counter==60?'1:00 min':counter+' s'}</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={handleClick}>Start</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
