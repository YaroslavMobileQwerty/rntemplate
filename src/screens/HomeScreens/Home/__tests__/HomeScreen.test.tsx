import { render, fireEvent } from "@testing-library/react-native";
import { HomeScreen } from "../index";
import { mockNavigate, createMockNavigation } from "~/../jest.setup";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        "home.title": "Welcome to Home Screen",
      };
      return translations[key] || key;
    },
  }),
}));

describe("HomeScreen", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const navigation = createMockNavigation("Home");

  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <HomeScreen navigation={navigation} />
    );

    expect(getByText("Welcome to Home Screen")).toBeTruthy();

    expect(getByPlaceholderText("add some text")).toBeTruthy();

    expect(getByText("Go to Settings")).toBeTruthy();
  });

  it("navigates to Settings on button press", () => {
    const { getByText } = render(<HomeScreen navigation={navigation} />);

    const button = getByText("Go to Settings");
    fireEvent.press(button);

    expect(mockNavigate).toHaveBeenCalledWith("Settings");
  });
});
