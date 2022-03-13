import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Calculator = () => {
  const ADDITION = 1;
  const SUBTRACTION = 2;
  const MULTIPLICATION = 3;
  const DIVISON = 4;

  const [input, setInput] = useState(0);
  const [log, setLog] = useState([]);
  const [tmp, setTmp] = useState([]);
  const [operator, setOperator] = useState();
  const [clearable, setClearable] = useState(true);

  const addValue = (symbol) => {
    if (clearable) {
      clearInput();
      setClearable(false);
    }
    setInput((oldValue) => oldValue + symbol);
  };

  const clearInput = () => {
    setInput("");
  };

  const resetInput = () => {
    setInput(0);
    setClearable(true);
  };

  const clearAll = () => {
    resetInput();
    setLog([]);
    setTmp([]);
  };

  const add = () => {
    if (input !== "") {
      setTmp((tmp) => [...tmp, input]);
      setOperator(ADDITION);
      setClearable(true);
    }
  };

  const subtract = () => {
    if (input !== "") {
      setTmp((tmp) => [...tmp, input]);
      setOperator(SUBTRACTION);
      setClearable(true);
    }
  };

  const multiply = () => {
    if (input !== "") {
      setTmp((tmp) => [...tmp, input]);
      setOperator(MULTIPLICATION);
      setClearable(true);
    }
  };

  const divid = () => {
    if (input !== "") {
      setTmp((tmp) => [...tmp, input]);
      setOperator(DIVISON);
      setClearable(true);
    }
  };

  const print = () => {
    console.log("TEMP: " + tmp);
    console.log("LOG: " + log);
  };

  const calculate = () => {
    // Calculate result
    let result;
    if (tmp.length > 0) {
      if (input === 0) {
        result = parseInt(tmp[tmp.length - 1]);
      } else {
        if (operator === ADDITION) {
          result = parseInt(tmp[tmp.length - 1]) + parseInt(input);
        } else if (operator === SUBTRACTION) {
          result = parseInt(tmp[tmp.length - 1]) - parseInt(input);
        } else if (operator === MULTIPLICATION) {
          result = parseInt(tmp[tmp.length - 1]) * parseInt(input);
        } else if (operator === DIVISON) {
          result = parseInt(tmp[tmp.length - 1]) / parseInt(input);
        }
      }
      // Display result in input field
      setInput(result);
      // Add result to log
      setLog((log) => [...log, result]);
      setClearable(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <Button label="0" value="0" onClick={addValue} />
        <Button label="1" value="1" onClick={addValue} />
        <Button label="2" value="2" onClick={addValue} />
        <Button label="3" value="3" onClick={addValue} />
        <Button label="4" value="4" onClick={addValue} />
        <Button label="5" value="5" onClick={addValue} />
        <Button label="6" value="6" onClick={addValue} />
        <Button label="7" value="7" onClick={addValue} />
        <Button label="8" value="8" onClick={addValue} />
        <Button label="9" value="9" onClick={addValue} />
        <Button label="." value="." onClick={print} />
        <Button label="+" value="+" onClick={add} />
        <Button label="-" value="-" onClick={subtract} />
        <Button label="*" value="*" onClick={multiply} />
        <Button label="/" value="/" onClick={divid} />
        <Button label="=" onClick={calculate} />
        <Button label="c" onClick={resetInput} />
        <Button label="ce" onClick={clearAll} />
      </div>
      <div className="log">
        <h2>History</h2>
        <ul>
          {log
            .slice(0)
            .reverse()
            .map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
