import { NavigationContainer } from "@react-navigation/native";
import { I18nextProvider } from "react-i18next";
import { RootNavigator } from "~/app/navigation/RootNavigator";
import { StoreProvider } from "~/app/store";
import i18n from "~/shared/i18n";
import { ErrorBoundary } from "./ErrorBoundary";

export default function App() {
  return (
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <ErrorBoundary>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ErrorBoundary>
      </I18nextProvider>
    </StoreProvider>
  );
}
