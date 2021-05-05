import React from "react";
import renderer from "react-test-renderer";
import ResultRow from "./ResultRow";

it("renders the ResultRow correctly", () => {
  const component = renderer.create(<ResultRow />).toJSON();
  expect(component).toMatchSnapshot();
});
