import React from "react";
import "./ResultRow.scss";

export default function ResultRow(props) {
  return (
    <div className="result-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
}
