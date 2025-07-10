import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "~/app/navigation/RootNavigator";
import { StoreProvider } from "~/app/store";

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
