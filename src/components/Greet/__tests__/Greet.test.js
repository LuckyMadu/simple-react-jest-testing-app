import React from "react";
import renderer from "react-test-renderer";
import Greet from "../index";

describe("Greet ui tests", () => {
  test("ui rendered correctly", () => {
    const component = renderer.create(<Greet />).toJSON;
    expect(component).toMatchSnapshot();
  });
});
