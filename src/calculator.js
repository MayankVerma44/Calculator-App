
import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS for styling

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handler for number and operator buttons
  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Handler for "=" button
  const calculateResult = () => {
    try {
      // Check if input is empty and show Error if "=" is clicked directly
      if (!input) {
        setResult("Error");
      } else {
        const calculation = eval(input);
        if (isNaN(calculation)) {
          setResult("NaN"); // Special case: 0/0
        } else {
          setResult(calculation === Infinity ? "Infinity" : calculation); // Handle division by zero
        }
      }
    } catch (error) {
      setResult("Error");
    }
  };

  // Handler for "C" button to clear input and result
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {/* Render buttons for digits, operators, and controls */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleButtonClick(num.toString())}>
            {num}
          </button>
        ))}
        {['+', '-', '*', '/'].map((operator) => (
          <button key={operator} onClick={() => handleButtonClick(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
