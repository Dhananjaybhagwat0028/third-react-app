import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

// UserDefineTag
function CounterApp() {
  // Data Member :: stateless/ stateful
  // let counter = 1; // stateless
  let [counter, setCounter] = useState(1); // to create stateful variable + this will help to perform dom operation.

  // Member Function
  let likeMeAction = () => {
    counter = counter + 1;
    console.log("I m button click", counter);

    // Asking REACT TO PERFOMR DOM OEPRATION
    // Calling setCounter => DOM Operation
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