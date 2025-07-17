import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import ConfirmModal from "./index";

jest.mock("react-native-modal", () => {
  const React = require("react");
  const { Pressable } = require("react-native");
  return ({ children, isVisible, onBackdropPress }: any) => {
    return isVisible ? (
      <Pressable onPress={onBackdropPress} testID="modal-backdrop">
        {children}
      </Pressable>
    ) : null;
  };
});

jest.mock("expo-image", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Image: () => {
      return <Text>MockImage</Text>;
    },
  };
});

jest.mock("~/shared/ui/components/Common/StyledButton", () => {
  const React = require("react");
  const { Pressable, Text } = require("react-native");
  return ({ children, onPress, disabled }: any) => (
    <Pressable
      onPress={onPress}
      accessibilityState={{ disabled }}
      testID={`button-${children}`}
    >
      <Text>{children}</Text>
    </Pressable>
  );
});

jest.mock("~/shared/ui/components/Common/StyledText", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return ({ children }: any) => <Text>{children}</Text>;
});

describe("ConfirmModal", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders text and buttons correctly", () => {
    const { getByText } = render(
      <ConfirmModal
        isVisible={true}
        text="Are you sure?"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    expect(getByText("Are you sure?")).toBeTruthy();
    expect(getByText("Cancel")).toBeTruthy();
    expect(getByText("Confirm")).toBeTruthy();
  });

  it("calls onClose when Cancel is pressed", () => {
    const { getByText } = render(
      <ConfirmModal
        isVisible={true}
        text="Close?"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.press(getByText("Cancel"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when Confirm is pressed", () => {
    const { getByText } = render(
      <ConfirmModal
        isVisible={true}
        text="Confirm?"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.press(getByText("Confirm"));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it("disables Confirm button when isLoading is true", () => {
    const { getByTestId } = render(
      <ConfirmModal
        isVisible={true}
        text="Loading..."
        isLoading={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    const confirmButton = getByTestId("button-Confirm");
    expect(confirmButton.props.accessibilityState?.disabled).toBe(true);
  });

  it("calls onClose when backdrop is pressed", () => {
    const { getByTestId } = render(
      <ConfirmModal
        isVisible={true}
        text="Backdrop test"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    act(() => {
      fireEvent.press(getByTestId("modal-backdrop"));
    });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
