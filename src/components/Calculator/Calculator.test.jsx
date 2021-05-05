import React from "react";
import renderer from "react-test-renderer";
import Calculator from "./Calculator";

it("renders the Calculator correctly", () => {
  const component = renderer.create(<Calculator />).toJSON();
  expect(component).toMatchSnapshot();
});
