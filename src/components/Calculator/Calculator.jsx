import React, { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import "./Calculator.scss";
//import logo from "../../public/DCMN_logo.png";

export default function Calculator() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const addToInput = () => {
    console.log("xx");
  };

  return (
    <div className="calculator-wrapper">
      {/* <img className="logo" src={logo}></img> */}
      <div className="container">
        <Display />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <Button>C</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button>.</Button>
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}
