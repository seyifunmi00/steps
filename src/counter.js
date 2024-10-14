import React from "react";
import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  // function increase() {
  //   setStep((step) => step + 1);
  // }

  // function decrease() {
  //   if (step > 0) {
  //     setStep((step) => step - 1);
  //   }
  // }

  function decreaseCount() {
    setCount((count) => {
      let newCount = count - step; // Use the updated step here
      let newDate = new Date();
      newDate.setDate(newDate.getDate() - Math.abs(newCount));
      setDate(newDate.toDateString());
      return newCount;
    });
  }
  function increaseCount() {

    setCount((count) => {
     let newCount = count + step; // Use the updated step here
     let newDate = new Date();
     newDate.setDate(newDate.getDate() + Math.abs(newCount));
     setDate(newDate.toDateString());
     return newCount;
   });
  }

  function handleChange(e) {
    setStep(parseInt(e.target.value));
  }

  function handleCount(e) {
    setCount(parseInt(e.target.value));
  }

  function reset() {
    setStep(1);
    setCount(0);
    setDate(new Date().toDateString());
  }

  return (
    <div>
      <div>
        {/* <button onClick={decrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={increase}>+</button> */}
        <input type="range" min="0" max="10" value={step} onChange={handleChange} /> {step}
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        {/* <span>Count: {count}</span> */}
        <input type="number" value={count} onChange={handleCount} />
        <button onClick={increaseCount}>+</button>
      </div>

      <p>
        {count} {count > 1 ? "days" : "day"} from now it will be {date}
      </p>

      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
