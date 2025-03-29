import { useState } from "react";

const Counter = () => {
    let[counter,setcounter]=useState(1)
    const min = () => {
        if (counter > 0) {
            setcounter(counter - 1)
        }
    };
  const plus =()=>{
    setcounter(counter++)
  }
    return ( 
        <div style={{marginTop:"20px"}}>
            <button onClick={min} style={{border:"#adb5bd"}} >-</button>
            <button style={{border:"#adb5bd"}}>{counter}</button>
            <button onClick={plus} style={{border:"#adb5bd"}}>+</button>
        </div>
     );
}
 
export default Counter;