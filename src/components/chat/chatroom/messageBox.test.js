import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import MessageBox from "./messageBox";
import { BrowserRouter as Router } from "react-router-dom";
afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <Router>
      <MessageBox />
    </Router>,
    div
  );
});
