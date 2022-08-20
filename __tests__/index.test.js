import React from "react";
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import Home from '../pages/index'

describe("HomePage", () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<Home/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
  });