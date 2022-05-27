import { useState } from "react";
import "./App.css";
import { Category } from "./components/category";

function App() {
  const [counter, setCounter] = useState(0);

  // 1. first method 
  // const handleAdd = () => {
  //   if (counter >= 10) {
  //     return;
  //   }
  //   setCounter(counter + 1);
  // };

  // const handleSub = () => {
  //   if (counter == 0) {
  //     return;
  //   }
  //   setCounter(counter - 1);
  // };

  // 2. second method 
  const handleChange = (value) =>{
    // conditions 
    setCounter(counter + value);
  };

  if (counter >= 10){
    return <h4>Counter reaches maximum value</h4>
  }

  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button onClick={()=>{handleChange(1)}}>Add 1</button>
      <button onClick={()=>{handleChange(-1)}}>Sub 1</button>
      <div className="">Number is {counter % 2 === 0 ? "Even" : "Odd"} </div>
    </div>
  );
}
export default App;

