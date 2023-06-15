import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
      <CounterApp />
      <CounterApp />
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
    // how to trigger the DOM Opr
    setCounter(counter);
  };

  return (
    <>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        commodi reiciendis ullam aliquam facilis perferendis accusamus
        voluptatum eligendi, eaque voluptatem corrupti, dicta nesciunt voluptas.
        Cumque quod dolorem cupiditate quidem corrupti!
      </h5>
      <h5>
        {counter}{" "}
        <input type="button" value="&#128077;" onClick={likeMeAction} />
      </h5>
    </>
  );
}

export default App;
