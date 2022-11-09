import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import {
  PasswordInputField,
  PasswordInputFieldProps,
} from "../PasswordInputField";

describe("<PasswordInputField />", () => {
  let passwordProps: PasswordInputFieldProps;

  beforeEach(() => {
    passwordProps = {
      strength: "Very Strong",
      isVisible: false,
      toggleVisibility: jest.fn(),
      onChange: jest.fn(),
      inputProps: {
        value: "password",
      },
    };
  });

  it("should display strength", () => {
    render(<PasswordInputField {...passwordProps} />);
    expect(
      screen.getByText(passwordProps.strength || "", { exact: false })
    ).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it("should make password visible", () => {
    const { rerender } = render(<PasswordInputField {...passwordProps} />);
    const toggle = screen.getByRole("checkbox");
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "password");
    fireEvent.click(toggle);
    expect(passwordProps.toggleVisibility).toHaveBeenCalled();
    rerender(<PasswordInputField {...passwordProps} isVisible={true} />);
    expect(input).toHaveAttribute("type", "text");
    expect(screen).toMatchSnapshot();
  });

  it("should call onChange callback", () => {
    render(<PasswordInputField {...passwordProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(passwordProps.onChange).toHaveBeenCalled();
    expect(screen).toMatchSnapshot();
  });

  it("should render correct initial value", () => {
    render(<PasswordInputField {...passwordProps} />);
    expect(screen.getByRole("textbox")).toHaveValue(
      passwordProps.inputProps.value
    );
    expect(screen).toMatchSnapshot();
  });
});
