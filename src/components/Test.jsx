import React, { useState } from "react"; 
const Test =()=>{
    const [
      stata,
      setState
    ]=useState(0)
    function handleClick() {
      setState(stata + 1);
      }
    function Click() {
      setState(stata - 1);
      }
    return <div> <h2>
      {stata}
    </h2>
      <button onClick={handleClick}>+</button>
      <button onClick={Click}>-</button>
    </div>
}
export default Test