import React from "react";
import "./Button.scss";

const isOperator = (val) => {
  return !isNaN(val) || val === ".";
};

export default function Button(props) {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? "" : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}
