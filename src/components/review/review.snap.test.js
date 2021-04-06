import React from "react";
import {render} from "@testing-library/react";
import Review from "./review";
import {REVIEW} from "../../const";

test(`Should Review render correctly`, () => {
  const {container} = render(<Review review={REVIEW} />);
  expect(container).toMatchSnapshot();
});
