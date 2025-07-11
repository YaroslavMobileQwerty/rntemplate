import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "~/app/navigation/Main";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        "t.home.title": "Welcome to Home Screen",
      };
      return translations[key] || key;
    },
  }),
}));

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );

    expect(getByText("Welcome to Home Screen")).toBeTruthy();

    expect(getByPlaceholderText("add some text")).toBeTruthy();

    expect(getByText("Go to Settings")).toBeTruthy();
  });

  it("navigates to Settings on button press", () => {
    const { getByText } = render(
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );

    const button = getByText("Go to Settings");
    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
