import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "~/app/navigation/RootNavigator";
import { StoreProvider } from "~/app/store";
import { I18nextProvider } from "react-i18next";
import i18n from "~/shared/i18n";

export default function App() {
  return (
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </StoreProvider>
  );
}
