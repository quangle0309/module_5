import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleChange1 = () => {
    setCounter1(counter1 + 1);
  }

  const handleChange2 = () => {
    setCounter2(counter2 + 2);
  }

  return (
      <>
        <h1>{counter1}</h1>
        <button onClick={handleChange1}>Increase1</button>
        <h1>{counter2}</h1>
        <button onClick={handleChange2}>Increase2</button>
      </>
  );
}

export default App;
