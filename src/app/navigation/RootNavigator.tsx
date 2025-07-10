import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackNavigator } from "~/app/navigation/Main";

export type RootStackParamList = {
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen
        name="Main"
        component={MainStackNavigator}
        options={{ title: "Settings" }}
      />
    </RootStack.Navigator>
  );
}
