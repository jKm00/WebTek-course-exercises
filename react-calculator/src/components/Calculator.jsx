import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const Calculator = () => {

  const [input, setInput] = useState('')
  const [clearable, setClerable] = useState(false)
  const [log, setLog] = useState([])

  const toggleClerable = () => {
      setClerable(!clearable)
  }

  const addValue = (symbol) => {
      if (!clearable) {
        setInput(oldValue => oldValue + symbol)
      } else {
          setInput(symbol)
          toggleClerable()
      }
  }

  const clearInput = () => {
      setInput('');
  }

  const clearAll = () => {
    setInput('')
    setLog([])
  }

  const addition = () => {
    setLog(log => [...log, input])
    console.log(log)
  }

  const calculate = () => {
    console.log("NOT IMPLEMETED: Should take last entry in log together with the value in the input field and make the operation. then display the result")
  }

  return(
    <>
        <div className="calculator">
            <input type="text" value={input} readOnly/>
            <Button label="0" value="0" onClick={addValue}/>
            <Button label="1" value="1" onClick={addValue}/>
            <Button label="2" value="2" onClick={addValue}/>
            <Button label="3" value="3" onClick={addValue}/>
            <Button label="4" value="4" onClick={addValue}/>
            <Button label="5" value="5" onClick={addValue}/>
            <Button label="6" value="6" onClick={addValue}/>
            <Button label="7" value="7" onClick={addValue}/>
            <Button label="8" value="8" onClick={addValue}/>
            <Button label="9" value="9" onClick={addValue}/>
            <Button label="." value="." onClick={addValue}/>
            <Button label="+" value="+" onClick={addition}/>
            <Button label="-" value="-" onClick={addValue}/>
            <Button label="*" value="*" onClick={addValue}/>
            <Button label="/" value="/" onClick={addValue}/>
            <Button label="=" onClick={calculate}/>
            <Button label="c" onClick={clearInput}/>
            <Button label="ce" onClick={clearAll}/>
        </div>
    </>
  )
}

export default Calculator;