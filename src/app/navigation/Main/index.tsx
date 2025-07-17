import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "~/screens/HomeScreens/Home";
import { WebViewScreen } from "~/screens/HomeScreens/WebView";
import { SettingsScreen } from "~/screens/SettingScreens/Settings";

export type MainStackParamList = {
  Home: undefined;
  Settings: undefined;
  WebView: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainStackNavigator({
  initialRouteName = "Home",
}: {
  initialRouteName?: keyof MainStackParamList;
}) {
  return (
    <MainStack.Navigator initialRouteName={initialRouteName}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <MainStack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{ title: "WebView" }}
      />
      <MainStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </MainStack.Navigator>
  );
}
