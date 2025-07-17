import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import StyledInput from "./index";

describe("StyledInput", () => {
  it("renders with label and placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <StyledInput label="Email" placeholder="Enter email" />
    );

    expect(getByText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Enter email")).toBeTruthy();
  });

  it("calls onChangeValue when text is typed", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <StyledInput placeholder="Type here" onChangeValue={handleChange} />
    );

    const input = getByPlaceholderText("Type here");
    fireEvent.changeText(input, "test");
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("shows error message", () => {
    const { getByText } = render(<StyledInput error="Required field" />);
    expect(getByText("Required field")).toBeTruthy();
  });

  it("shows success text", () => {
    const { getByText } = render(<StyledInput successText="Looks good!" />);
    expect(getByText("Looks good!")).toBeTruthy();
  });

  it("applies custom label style", () => {
    const { getByText } = render(
      <StyledInput label="Username" labelStyle={{ color: "red" }} />
    );

    const label = getByText("Username");
    const style = Array.isArray(label.props.style)
      ? label.props.style.flat().filter(Boolean)
      : [label.props.style];

    expect(style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: "red" })])
    );
  });
});
