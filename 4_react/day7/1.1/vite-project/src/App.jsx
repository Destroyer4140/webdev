import { useMemo, useState } from "react";
import Sum from "./Sum";


function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);

  const prime = useMemo(() => {
    let total = 0;
    if(number > 1) total++;
    console.log("Number is", number);
    for(let i=3; i<=number; i++) {
      total++;
      for(let j=2; j<i; j++) {
        if(i%j == 0) {
          total--;
          break;
        }
      }
    }
    console.log("Total is", total);
    return total;
  }, [number]);

  console.log("App Render");

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <h1>Increase the number by 100: {number}</h1>
      <button onClick={() => setNumber(number+100)}>Increment</button>
      <h2>Total Prime Number: {prime}</h2>
      <Sum number = {number}/>
    </>
  );
}

export default App;