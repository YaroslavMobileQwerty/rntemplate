import { render, fireEvent } from "@testing-library/react-native";
import { MockedNavigator } from "~/shared/tests/utils/MockedNavigator";
import { SettingsScreen } from "../index";
import { mockNavigate, createMockNavigation } from "~/../jest.setup";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        "settings.title": "Settings Screen",
      };
      return translations[key] || key;
    },
  }),
}));

describe("SettingsScreen", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const navigation = createMockNavigation("Settings");

  it("renders correctly", () => {
    const { getByText } = render(<SettingsScreen navigation={navigation} />);

    expect(getByText("Settings Screen")).toBeTruthy();
    expect(getByText("Back to Home")).toBeTruthy();
  });

  it("navigates to Settings on button press", () => {
    const { getByText } = render(<SettingsScreen navigation={navigation} />);

    const button = getByText("Back to Home");
    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
