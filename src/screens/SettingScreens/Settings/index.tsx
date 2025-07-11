import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { MainStackParamList } from "~/app/navigation/Main";

import StyledButton from "~/shared/ui/components/Common/StyledButton";
import StyledText from "~/shared/ui/components/Common/StyledText";

type SettingsScreenNav = NativeStackNavigationProp<
  MainStackParamList,
  "Settings"
>;

type Props = {
  navigation: SettingsScreenNav;
};

export function SettingsScreen({ navigation }: Props) {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledText>{t("t.settings.title")}</StyledText>
      <StyledButton onPress={() => navigation.navigate("Settings")}>
        Back to Home
      </StyledButton>
    </View>
  );
}
