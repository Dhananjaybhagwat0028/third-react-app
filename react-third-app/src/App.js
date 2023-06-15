import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

function CounterApp() {
  // let counter = 100; // stateless
  let [counter, setCounter] = useState(100); // stateful + DOM Opr

  let likeMeAction = () => {
    counter = counter + 1;
    console.log(counter);

    // Asking react to perform dom opr
    setCounter(counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
  );
}

export default App;
