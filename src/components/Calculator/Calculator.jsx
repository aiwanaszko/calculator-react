import React, { Component } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import "./Calculator.scss";
import logo from "../../assets/DCMN_logo.png";
import { evaluate, round } from "../../utils/math.js";

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
    this.setState({ result: round(evaluate(this.state.equation)) });
  };

  render() {
    return (
      <div className="calculator-wrapper">
        <img className="logo" src={logo}></img>
        <div className="calculator-container">
          <Display equation={this.state.equation} result={this.state.result} />
          <div className="buttons-container">
            <div className="column">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>1</Button>
              <Button
                handleClick={() => this.setState({ equation: "", result: "" })}
              >
                {this.state.equation === "" ? "AC" : "C"}
              </Button>
            </div>

            <div className="column">
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>0</Button>
            </div>

            <div className="column">
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>.</Button>
            </div>

            <div className="column">
              <Button handleClick={this.addToInput}>+</Button>
              <Button handleClick={this.addToInput}>-</Button>
              <Button handleClick={this.handleEqual}>=</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
