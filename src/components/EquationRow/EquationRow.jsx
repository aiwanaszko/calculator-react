import React from "react";
import "./EquationRow.scss";

export default function EquationRow(props) {
  return (
    <div className="equation-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
}
