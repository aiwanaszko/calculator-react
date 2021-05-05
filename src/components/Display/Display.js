import React from "react";
import EquationRow from "../EquationRow/EquationRow";
import ResultRow from "../ResultRow/ResultRow";

export default function Display(props) {
  return (
    <div>
      <EquationRow />
      <ResultRow />
    </div>
  );
}
