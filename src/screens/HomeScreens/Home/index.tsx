import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { MainStackParamList } from "~/app/navigation/Main";
import StyledButton from "~/shared/ui/components/Common/StyledButton";
import StyledInput from "~/shared/ui/components/Common/StyledInput";
import StyledText from "~/shared/ui/components/Common/StyledText";

type HomeScreenNav = NativeStackNavigationProp<MainStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNav;
};

export function HomeScreen({ navigation }: Props) {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledText>{t("t.home.title")}</StyledText>
      <StyledInput placeholder="add some text" />
      <StyledButton onPress={() => navigation.navigate("Settings")}>
        Go to Settings
      </StyledButton>
    </View>
  );
}
