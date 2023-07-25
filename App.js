import "./styles.css";

import React, {useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const [count , setCount] = useState("")
  
  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

 function clear(){
  setCount("")
  setResult("")
 }

  function calculate (){
    setCount(eval(result));
  }
  

  function backSpace(){
    setResult(result.slice(0,-1))
  }
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="pervious-operand">{result}</div>
        <div className="current-operand">{count}</div>
      </div>
      <button onClick={clear} className="span-two">AC</button >
      <button onClick={backSpace}>DEL</button >
      <button name = "/" onClick={handleClick}>÷</button >
      <button name = "1" onClick={handleClick}>1</button >
      <button name = "2" onClick={handleClick}>2</button >
      <button name = "3" onClick={handleClick}>3</button >
      <button name = "*" onClick={handleClick}>*</button >
      <button name = "4" onClick={handleClick}>4</button >
      <button name = "5" onClick={handleClick}>5</button >
      <button name ="6" onClick={handleClick}>6</button >
      <button name = "+" onClick={handleClick}>+</button >
      <button name ="7" onClick={handleClick}>7</button >
      <button name ="8" onClick={handleClick}>8</button >
      <button name ="9" onClick={handleClick}>9</button >
      <button name ="-"onClick={handleClick}>-</button >
      <button name="." onClick={handleClick}>.</button >
      <button name ="0" onClick={handleClick}>0</button >
      <button name ="=" onClick={calculate} className="span-two">=</button>
    </div>
  );
}

export default App;
