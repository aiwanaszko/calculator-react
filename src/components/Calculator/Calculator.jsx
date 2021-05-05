import React, { Component } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import "./Calculator.scss";
//import logo from "../../public/DCMN_logo.png";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "",
      result: "",
    };
  }

  addToInput = (val) => {
    this.setState({ equation: this.state.equation + val });
  };

  handleEqual = () => {
    // evaluate
  };

  render() {
    return (
      <div className="calculator-wrapper">
        {/* <img className="logo" src={logo}></img> */}
        <div className="container">
          <Display equation={this.state.equation} result={this.state.result} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button
              handleClick={() => this.setState({ equation: "", result: "" })}
            >
              {this.state.equation === 0 ? "AC" : "C"}
            </Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
