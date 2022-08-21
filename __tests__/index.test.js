import React from "react";
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import Home from '../pages/index'
import Navigation from '../components/Navigation'

describe("HomePage", () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<Home/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
  });

describe("Navigation", () => {
    it("renders all buttons",() => {
        const tree = renderer
          .create(<Navigation/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    })
})