import React from "react";
import { render } from "@testing-library/react-native";
import StyledText from "./index";

describe("StyledText", () => {
  it("renders with default props", () => {
    const { getByText } = render(<StyledText>Test Text</StyledText>);
    const textElement = getByText("Test Text");
    expect(textElement).toBeTruthy();
  });

  it("renders with all boolean props", () => {
    const { getByText } = render(
      <StyledText title additional medium extraSmall semibold>
        Styled Text
      </StyledText>
    );
    const textElement = getByText("Styled Text");
    expect(textElement).toBeTruthy();
  });

  it("applies custom styles", () => {
    const customStyle = { color: "red", fontSize: 18 };
    const { getByText } = render(
      <StyledText style={customStyle}>Styled with custom style</StyledText>
    );
    const textElement = getByText("Styled with custom style");
    expect(textElement).toBeTruthy();
  });

  it("respects numberOfLines", () => {
    const { getByText } = render(
      <StyledText numberOfLines={3}>Multiline</StyledText>
    );
    const textElement = getByText("Multiline");
    expect(textElement.props.numberOfLines).toBe(3);
  });

  it("respects allowFontScaling", () => {
    const { getByText } = render(
      <StyledText allowFontScaling={false}>No scaling</StyledText>
    );
    const textElement = getByText("No scaling");
    expect(textElement.props.allowFontScaling).toBe(false);
  });

  it("calls onTextLayout", () => {
    const mockLayout = jest.fn();
    const { getByText } = render(
      <StyledText onTextLayout={mockLayout}>Layout Test</StyledText>
    );
    const textElement = getByText("Layout Test");
    textElement.props.onTextLayout?.({ nativeEvent: { lines: [] } });
    expect(mockLayout).toHaveBeenCalled();
  });
});
