import React from "react";
import NotFound from "../../src/pages/404";
import { render } from "@testing-library/react";

describe("NotFound/404", () => {
  it("matches the snapshot", () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
