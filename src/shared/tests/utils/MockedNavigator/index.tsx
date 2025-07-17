import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

type Props = {
  component: React.ComponentType<any>;
  name?: string;
  initialParams?: Record<string, any>;
};

export const MockedNavigator = ({
  component: Component,
  name = "MockScreen",
  initialParams,
}: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={name}>
        <Stack.Screen
          name={name}
          component={Component}
          initialParams={initialParams}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
