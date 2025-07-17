import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import StyledButton from "./index";

describe("StyledButton", () => {
  it("renders correctly with text", () => {
    const { getByText } = render(
      <StyledButton onPress={() => {}}>Click me</StyledButton>
    );
    expect(getByText("Click me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <StyledButton onPress={mockFn}>Press me</StyledButton>
    );

    fireEvent.press(getByText("Press me"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <StyledButton onPress={mockFn} disabled>
        Disabled
      </StyledButton>
    );

    fireEvent.press(getByText("Disabled"));
    expect(mockFn).not.toHaveBeenCalled();
  });

  it("applies custom styles", () => {
    const { getByText } = render(
      <StyledButton
        onPress={() => {}}
        style={{ backgroundColor: "red" }}
        textStyle={{ color: "blue" }}
      >
        Styled
      </StyledButton>
    );

    const buttonText = getByText("Styled");
    const flattenedStyles = (
      Array.isArray(buttonText.props.style)
        ? buttonText.props.style.flat().filter(Boolean)
        : [buttonText.props.style]
    ) as object[];

    expect(flattenedStyles).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: "blue" })])
    );
  });
});
