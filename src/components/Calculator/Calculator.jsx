import React from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import "./Calculator.scss";
//import logo from "../../public/DCMN_logo.png";

export default function Calculator() {
  return (
    <div className="calculator-wrapper">
      {/* <img className="logo" src={logo}></img> */}
      <div className="container">
        <Display />
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>C</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}
