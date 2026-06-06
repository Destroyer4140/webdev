import { useState } from "react";

function App() {
  // let count = 0;

  // function increaseNumber() {
  //   count++;
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter: ${count}`;
  //   console.log(count);
  // }

  let [count, setCount] = useState(0); // when we are clicking on increaseNumber, then setCount singl react using 
  // userState that re-render App(), so that updated value will reflect for count on webpage.
  
  function increaseNumber() {
    count++;
    setCount(count);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increaseNumber}>Increment : {count}</button>
    </>
  )
};

export default App;