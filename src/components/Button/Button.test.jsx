import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

it("renders the Button correctly", () => {
  const component = renderer.create(<Button />).toJSON();
  expect(component).toMatchSnapshot();
});
