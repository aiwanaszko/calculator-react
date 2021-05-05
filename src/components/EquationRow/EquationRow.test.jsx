import React from "react";
import renderer from "react-test-renderer";
import EquationRow from "./EquationRow";

it("renders the EquationRow correctly", () => {
  const component = renderer.create(<EquationRow />).toJSON();
  expect(component).toMatchSnapshot();
});
