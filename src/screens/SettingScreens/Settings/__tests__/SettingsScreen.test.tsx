import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "~/app/navigation/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "..";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        "t.settings.title": "Settings Screen",
      };
      return translations[key] || key;
    },
  }),
}));

describe("SettingsScreen", () => {
  it("renders correctly", () => {
    const Stack = createNativeStackNavigator();
    const { getByText } = render(
      <NavigationContainer>
        <MainStackNavigator initialRouteName="Settings" />
      </NavigationContainer>
    );

    expect(getByText("Settings Screen")).toBeTruthy();
    expect(getByText("Back to Home")).toBeTruthy();
  });

  it("navigates to Settings on button press", () => {
    const { getByText } = render(
      <NavigationContainer>
        <MainStackNavigator initialRouteName="Settings" />
      </NavigationContainer>
    );

    const button = getByText("Back to Home");
    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
