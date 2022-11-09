import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("<Button />", () => {
  it("should render text correctly", () => {
    const text = "Lorem ipsum";
    render(<Button text={text} />);
    expect(screen.getByRole("button")).toHaveTextContent(text);
    expect(screen).toMatchSnapshot();
  });

  it("should fire onclick callback correctly", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} text="_" />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
    expect(screen).toMatchSnapshot();
  });
});
