import { fireEvent, render, screen } from "@testing-library/react";
import { usePasswordOutput } from "hooks/usePassword";
import React from "react";

import { AuthForm } from "../AuthForm";

describe("<AuthForm />", () => {
  const passwordDataMock: usePasswordOutput = {
    onChange: jest.fn(),
    isVisible: true,
    toggleVisibility: jest.fn(),
    strength: "Strong",
    inputProps: {},
  };

  it("should display the error", () => {
    const error = "Error description";
    render(
      <AuthForm
        onSubmit={jest.fn()}
        passwordData={passwordDataMock}
        error={error}
      />
    );
    expect(screen.getByText(error)).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it("should handle submit", () => {
    const mock = { ...passwordDataMock, inputProps: { value: "" } };
    const onSubmit = jest.fn();
    render(<AuthForm onSubmit={onSubmit} passwordData={mock} />);
    fireEvent.submit(screen.getByRole("form"));
    expect(onSubmit).toHaveBeenCalled();
    expect(screen).toMatchSnapshot();
  });
});
