import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display";

it("renders the Display correctly", () => {
  const component = renderer.create(<Display />).toJSON();
  expect(component).toMatchSnapshot();
});
