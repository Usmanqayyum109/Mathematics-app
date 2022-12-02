import  { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
function Timer({maxRange}){
const [counter,setCounter] = useState(maxRange);

useEffect(() => {
    if (counter > 0){
        setTimeout(() =>setCounter(counter - 1),1000);
    }
},[counter])
return(
    {counter}
)
}

export default Timer;
