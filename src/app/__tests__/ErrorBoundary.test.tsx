import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { ErrorBoundary } from "../ErrorBoundary";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
}));

const ThrowError = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  const mockT = jest.fn((key) => key);

  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({ t: mockT });
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <View>
          <Text>Test Child</Text>
        </View>
      </ErrorBoundary>
    );
    expect(screen.getByText("Test Child")).toBeTruthy();
  });

  it("renders fallback when error occurs", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText("error.fallback")).toBeTruthy();
    expect(screen.getByText("error.try_again")).toBeTruthy();
  });
});
