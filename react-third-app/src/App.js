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
  // Member Function
  let likeMeAction = () => {
    // alert();
    console.log("I m button click");
  };

  return (
    <>
      <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
  );
}

export default App;
