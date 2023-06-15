import { useState } from "react";

function App(){
  return (
    <>
      <h1>
        String Example
        <StringDemo />
      </h1>
    </>
  );
}
 function StringDemo (){
  let [title ,setTitle] = useState("hello world ");

  let lowerCaseAction = () =>{
    title = title.toLowerCase();
    console.log(title);
    //Dom operatons 
    setTitle(title);
  };

  let upperCaseAction = () =>{
    title = title.toUpperCase();
    console.log(title);

     setTitle(title);
  };

   return (
    <>
    <h1> {title} </h1>
    <input type="button" value="Lower case" onClick={lowerCaseAction} />
    <input type="button" value="Upper case" onClick={upperCaseAction} />
    </>
   );
 }

export default App;