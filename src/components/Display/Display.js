import React from "react";
import EquationRow from "./components/EquationRow";
import ResultRow from "./components/ResultRow";

export default function Display(props) {
  return (
    <div>
      <EquationRow />
      <ResultRow />
    </div>
  );
}
