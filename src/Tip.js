import React, { useState } from 'react'

function Tip() {
 const [total, setTotal] = useState(0);

 const [input , setInput] =useState (0);
 const [percentage, setPercentage] = useState (1);

 const handleInput = (e) => {
  setInput(Number(e.target.value));
 }

 const handlePercentage = (e) =>{
  setPercentage(Number(e.target.value));
 }

 const submit = () => {
  setTotal(Number(input + (input * percentage / 100)));
 }
  return (
    <div>
      <input type="number" placeholder='amount in dollars...'  onChange={handleInput} />
      <input type="number" placeholder='percentage tip...' onChange={handlePercentage}/>
      <button onClick={()=>submit()}>submit</button>
      <p>Your are to pay ${total} </p>
    </div>
  )
}

export default Tip
