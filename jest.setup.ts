import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "~/app/navigation/Main";

export const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

export function createMockNavigation<
  ScreenName extends keyof MainStackParamList
>(
  screenName: ScreenName
): NativeStackNavigationProp<MainStackParamList, ScreenName> {
  const mockNavigationPartial: Partial<
    NativeStackNavigationProp<MainStackParamList, ScreenName>
  > = {
    navigate: mockNavigate,
    goBack: jest.fn(),
  };

  return mockNavigationPartial as NativeStackNavigationProp<
    MainStackParamList,
    ScreenName
  >;
}
