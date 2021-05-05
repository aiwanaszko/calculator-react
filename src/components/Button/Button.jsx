import React from "react";
import "./Button.scss";

const isOperator = (val) => {
  return val === "+" || val === "-" || val === "AC" || val === "C";
};

const isEqualityOperator = (val) => {
  return val === "=";
};

export default function Button(props) {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children)
          ? "operator"
          : isEqualityOperator(props.children)
          ? "equality-operator"
          : ""
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}
