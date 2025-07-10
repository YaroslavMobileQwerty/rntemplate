import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "~/screens/HomeScreens/Home";
import { SettingsScreen } from "~/screens/SettingScreens/Settings";

export type MainStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <MainStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </MainStack.Navigator>
  );
}
